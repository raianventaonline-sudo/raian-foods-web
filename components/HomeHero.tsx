"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: easing }
  })
};

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "show" : "hidden";

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/images/brand/hero-productos-raian-foods.png"
        alt="Composición visual de productos alimenticios RAIAN"
        fill
        priority
        className="object-cover object-[68%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,32,28,0.94)_0%,rgba(24,32,28,0.78)_42%,rgba(24,32,28,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(0deg,rgba(24,32,28,0.92)_0%,rgba(24,32,28,0.58)_46%,rgba(24,32,28,0)_100%)]" />
      <div className="raian-grain absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(82dvh-5rem)] w-full max-w-7xl items-center px-5 py-16 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={initial}
            animate="show"
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-1.5 backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-beige" aria-hidden />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-beige">
              Catálogo RAIAN · Valencia
            </span>
          </motion.div>

          <motion.h1
            initial={initial}
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="raian-display-balance font-display text-[2.8rem] font-medium leading-[1.02] text-white sm:text-5xl md:text-[4.5rem] lg:text-[5.4rem]"
          >
            Productos alimenticios{" "}
            <span className="italic text-beige" style={{ fontVariationSettings: '"SOFT" 80' }}>
              seleccionados
            </span>{" "}
            desde Valencia.
          </motion.h1>

          <motion.p
            initial={initial}
            animate="show"
            custom={0.22}
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-2xl md:leading-9"
          >
            Productos y recetas organizados para consultar rápido, comprar con confianza y disfrutar en casa.
          </motion.p>

          <motion.div
            initial={initial}
            animate="show"
            custom={0.34}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/productos"
              prefetch={false}
              className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-ink transition hover:bg-beige focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
            >
              Explorar catálogo
            </Link>
            <Link
              href="/sobre-nosotros"
              prefetch={false}
              className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
            >
              Conocer la marca
            </Link>
          </motion.div>

          <motion.div
            initial={initial}
            animate="show"
            custom={0.5}
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75"
          >
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="m5 12 4 4 10-10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Producto España
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="m5 12 4 4 10-10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Certificación Halal disponible
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="m5 12 4 4 10-10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Recetario y QR por producto
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
