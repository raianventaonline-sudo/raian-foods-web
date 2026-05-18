"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import Link from "next/link";
import type { Product } from "@/data/products";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type ProductCardProps = {
  product: Product;
  index?: number;
};

const easing = [0.22, 1, 0.36, 1] as const;

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const transition: Transition = { duration: 0.65, delay: index * 0.05, ease: easing };
  const variants = reduceMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition
      };

  return (
    <motion.article
      {...variants}
      viewport={{ once: true, amount: 0.2 }}
      className="raian-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
    >
      <Link href={`/productos/${product.slug}`} prefetch={false} aria-label={`Ver ${product.name}`} className="block">
        <div className="relative overflow-hidden">
          <PlaceholderMedia asset={product.mainImage} className="aspect-[4/3] rounded-none border-0" />
          <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-olive shadow-sm backdrop-blur">
            <span className="size-1.5 rounded-full bg-olive" aria-hidden />
            {product.category}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight text-ink transition group-hover:text-olive">
          <Link href={`/productos/${product.slug}`} prefetch={false} className="focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 rounded">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{product.shortDescription}</p>
        {product.tags.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {product.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-sage/40 px-3 py-1 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/productos/${product.slug}`}
            prefetch={false}
            className="raian-button-glow inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
          >
            Ver ficha
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-1.5 transition group-hover:translate-x-0.5" aria-hidden>
              <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          {product.amazonUrl ? (
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noreferrer"
              className="raian-button-glow inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-terracotta hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            >
              Ver en Amazon
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
