"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ImageAsset } from "@/data/products";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type Props = {
  mainImage: ImageAsset;
  gallery: ImageAsset[];
  priority?: boolean;
};

const AUTOPLAY_MS = 4000;

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

export function ProductImageGallery({ mainImage, gallery, priority = false }: Props) {
  const availableGallery = gallery.filter((a) => a.available);
  const all = [mainImage, ...availableGallery];
  const total = all.length;

  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1); // dirección de la animación
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number, direction: 1 | -1 = 1) => {
      setDir(direction);
      setIdx((next + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => go(idx - 1, -1), [idx, go]);
  const next = useCallback(() => go(idx + 1, 1), [idx, go]);

  // Auto-play: avanza cada AUTOPLAY_MS ms, se pausa al hover
  useEffect(() => {
    if (paused || total <= 1) return;
    timerRef.current = setTimeout(() => go(idx + 1, 1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [idx, paused, total, go]);

  const active = all[idx];

  // Sin galería real → vista simple
  if (availableGallery.length === 0) {
    return <PlaceholderMedia asset={mainImage} className="aspect-[4/3] md:aspect-[5/4]" priority={priority} />;
  }

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 })
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Imagen principal con flechas */}
      <div
        className="group relative aspect-[4/3] overflow-hidden bg-beige md:aspect-square md:rounded-2xl md:border md:border-line"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active.src}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {active.available ? (
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className={active.fit === "contain" ? "object-contain p-4" : "object-cover"}
                priority={priority && idx === 0}
                sizes="(min-width: 1024px) 45vw, 100vw"
                unoptimized
              />
            ) : (
              <PlaceholderMedia asset={active} className="absolute inset-0 rounded-none border-0" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Flechas — visibles siempre en móvil, al hover en desktop */}
        <button
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-white/80 text-ink shadow-md backdrop-blur-sm transition hover:bg-white active:scale-95 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronIcon dir="left" />
        </button>
        <button
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-white/80 text-ink shadow-md backdrop-blur-sm transition hover:bg-white active:scale-95 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronIcon dir="right" />
        </button>

        {/* Indicadores de puntos */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {all.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > idx ? 1 : -1)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tira de miniaturas */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-2 pt-1 md:px-0 md:pb-1 md:pt-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {all.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => go(i, i > idx ? 1 : -1)}
            aria-label={img.alt}
            aria-pressed={i === idx}
            className={`relative shrink-0 size-[3.5rem] overflow-hidden rounded-xl border-2 transition-all duration-200 ${
              i === idx
                ? "border-terracotta shadow-md"
                : "border-line opacity-55 hover:opacity-90 hover:border-muted"
            }`}
          >
            {img.available ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={img.fit === "contain" ? "object-contain p-0.5" : "object-cover"}
                sizes="56px"
                unoptimized
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center bg-beige">
                <span className="text-[9px] text-center font-medium leading-tight text-muted px-1">{img.label}</span>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
