import Link from "next/link";
import type { Recipe } from "@/data/recipes";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { RatingStars } from "@/components/RatingStars";
import type { RecipeRatingSummary } from "@/lib/recipeRatings";

type RecipeCardProps = {
  recipe: Recipe;
  rating?: RecipeRatingSummary;
};

export function RecipeCard({ recipe, rating }: RecipeCardProps) {
  return (
    <article id={recipe.slug} className="raian-card flex h-full flex-col overflow-hidden rounded-md border border-line bg-white shadow-sm">
      <Link href={`/recetas/${recipe.slug}`} prefetch={false} aria-label={`Ver ${recipe.title}`} className="block">
        <PlaceholderMedia
          asset={recipe.image}
          className="aspect-[4/3] rounded-none border-0"
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 50vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-normal">
          <span className="rounded-full bg-sage px-3 py-1 text-olive">{recipe.categoryLabel}</span>
          <span className="text-muted">{recipe.servings} raciones</span>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{recipe.title}</h3>
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
            <dt className="font-semibold text-ink">Tiempo total</dt>
            <dd className="mt-1 text-muted">{recipe.time}</dd>
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
        </Link>
      </div>
    </article>
  );
}
