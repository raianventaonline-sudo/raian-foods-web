import Link from "next/link";
import type { Recipe } from "@/data/recipes";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article id={recipe.slug} className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm">
      <PlaceholderMedia asset={recipe.image} className="aspect-[4/3] rounded-none border-0" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-olive">{recipe.relatedProduct}</p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{recipe.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{recipe.summary}</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
          <div>
            <dt className="font-semibold text-ink">Tiempo</dt>
            <dd className="mt-1 text-muted">{recipe.time}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Dificultad</dt>
            <dd className="mt-1 text-muted">{recipe.difficulty}</dd>
          </div>
        </dl>
        <Link
          href={`/recetas#${recipe.slug}`}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
        >
          Ver receta
        </Link>
      </div>
    </article>
  );
}
