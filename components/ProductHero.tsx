"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { Product } from "@/data/products";
import { BorderBeam } from "@/components/BorderBeam";
import { ProductImageGallery } from "@/components/ProductImageGallery";

type ProductHeroProps = {
  product: Product;
};

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: easing }
  })
};

export function ProductHero({ product }: ProductHeroProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "show" : "hidden";

  return (
    <section className="raian-mesh-cream overflow-hidden md:py-20">
      <div className="mx-auto w-full max-w-7xl md:px-8">
        <div className="md:grid md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
        <motion.div initial={initial} animate="show" custom={0} variants={fadeUp}>
          <ProductImageGallery mainImage={product.mainImage} gallery={product.gallery} priority />
        </motion.div>
        <div className="px-5 py-10 md:px-0 md:py-0">
          <motion.p
            initial={initial}
            animate="show"
            custom={0.08}
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta"
          >
            {product.category}
          </motion.p>
          <motion.h1
            initial={initial}
            animate="show"
            custom={0.16}
            variants={fadeUp}
            className="raian-display-balance mt-4 font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={initial}
            animate="show"
            custom={0.26}
            variants={fadeUp}
            className="mt-5 text-lg leading-8 text-muted"
          >
            {product.shortDescription}
          </motion.p>
          <motion.div
            initial={initial}
            animate="show"
            custom={0.34}
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-2"
          >
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-white px-3 py-1 text-sm text-muted shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={initial}
            animate="show"
            custom={0.42}
            variants={fadeUp}
            className="mt-8"
          >
            {product.amazonUrl ? (
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noreferrer"
                className="raian-button-glow relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full bg-terracotta px-7 text-sm font-semibold text-white transition hover:bg-[#A85F3A] focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
              >
                <BorderBeam size={70} duration={5} colorFrom="#ffffff" colorTo="#F4DECF" />
                Ver disponibilidad en Amazon
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-2" aria-hidden>
                  <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full bg-beige px-6 text-sm font-semibold text-muted"
              >
                Disponible próximamente
              </button>
            )}
            <p className="mt-3 max-w-md text-xs leading-6 text-muted">
              La compra, cuando esté activa, se realiza fuera de esta web a través del canal indicado. RAIAN mantiene aquí
              la información de marca y producto.
            </p>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
