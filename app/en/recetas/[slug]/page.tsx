import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipeBySlug, recipes } from "@/data/recipes";
import SpanishRecipePage from "@/app/recetas/[slug]/page";

type RecipePageProps = { params: { slug: string } };

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export function generateMetadata({ params }: RecipePageProps): Metadata {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) return { title: "Recipe not found" };

  return {
    title: recipe.title,
    description: recipe.metaDescription,
    alternates: {
      canonical: `/en/recetas/${recipe.slug}`,
      languages: {
        es: `/recetas/${recipe.slug}`,
        en: `/en/recetas/${recipe.slug}`,
        "x-default": `/recetas/${recipe.slug}`
      }
    },
    openGraph: {
      title: `${recipe.title} | RAIAN Foods`,
      description: recipe.metaDescription,
      type: "article",
      locale: "en_GB"
    }
  };
}

export default SpanishRecipePage;
