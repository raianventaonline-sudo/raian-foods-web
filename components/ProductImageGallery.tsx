"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ImageAsset } from "@/data/products";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type Props = {
  mainImage: ImageAsset;
  gallery: ImageAsset[];
  priority?: boolean;
};

export function ProductImageGallery({ mainImage, gallery, priority = false }: Props) {
  const availableGallery = gallery.filter((a) => a.available);
  const all = [mainImage, ...availableGallery];
  const [idx, setIdx] = useState(0);
  const active = all[idx];

  // Sin galería real → vista simple
  if (availableGallery.length === 0) {
    return <PlaceholderMedia asset={mainImage} className="aspect-[4/3] md:aspect-[5/4]" priority={priority} />;
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Imagen principal */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-beige">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
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
      </div>

      {/* Tira de miniaturas */}
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {all.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setIdx(i)}
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
