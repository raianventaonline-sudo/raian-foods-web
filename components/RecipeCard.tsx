"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import Link from "next/link";
import type { Recipe } from "@/data/recipes";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { RatingStars } from "@/components/RatingStars";
import type { RecipeRatingSummary } from "@/lib/recipeRatings";

type RecipeCardProps = {
  recipe: Recipe;
  rating?: RecipeRatingSummary;
  index?: number;
};

const easing = [0.22, 1, 0.36, 1] as const;

export function RecipeCard({ recipe, rating, index = 0 }: RecipeCardProps) {
  const reduceMotion = useReducedMotion();
  const transition: Transition = { duration: 0.6, delay: (index % 9) * 0.05, ease: easing };
  const variants = reduceMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition
      };

  return (
    <motion.article
      id={recipe.slug}
      {...variants}
      viewport={{ once: true, amount: 0.2 }}
      className="raian-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
    >
      <Link href={`/recetas/${recipe.slug}`} prefetch={false} aria-label={`Ver ${recipe.title}`} className="block">
        <div className="relative overflow-hidden">
          <PlaceholderMedia
            asset={recipe.image}
            className="aspect-[4/3] rounded-none border-0"
            sizes="(min-width: 1024px) 31vw, (min-width: 768px) 50vw, 100vw"
          />
          <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-olive shadow-sm backdrop-blur">
            <span className="size-1.5 rounded-full bg-olive" aria-hidden />
            {recipe.categoryLabel}
          </span>
          <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {recipe.time}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight text-ink transition group-hover:text-olive">
          <Link href={`/recetas/${recipe.slug}`} prefetch={false} className="rounded focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2">
            {recipe.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{recipe.metaDescription}</p>
        {recipe.dietLabels.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {recipe.dietLabels.map((label) => (
              <span key={label} className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-olive">
                {label}
              </span>
            ))}
          </div>
        ) : null}
        <RatingStars summary={rating} compact className="mt-4" />
        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
          <div>
            <dt className="font-semibold text-ink">Raciones</dt>
            <dd className="mt-1 text-muted">{recipe.servings}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Producto</dt>
            <dd className="mt-1 text-muted">{recipe.relatedProduct}</dd>
          </div>
        </dl>
        <Link
          href={`/recetas/${recipe.slug}`}
          prefetch={false}
          className="raian-button-glow mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
        >
          Ver receta completa
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-1.5" aria-hidden>
            <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
