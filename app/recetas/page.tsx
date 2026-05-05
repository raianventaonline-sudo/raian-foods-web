import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionTitle } from "@/components/SectionTitle";
import {
  getRecipeCategoryLabel,
  getRecipeDietLabel,
  getRecipesByFilters,
  isRecipeCategory,
  isRecipeDiet,
  recipeCategories,
  recipeDietFilters,
  recipes,
  type RecipeCategory,
  type RecipeDiet
} from "@/data/recipes";
import { getRecipeRatingSummaries } from "@/lib/recipeRatings";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

type RecipesPageProps = {
  searchParams?: {
    categoria?: string;
    tipo?: string;
    apta?: string;
  };
};

export const metadata: Metadata = {
  title: "Usos y recetas",
  description:
    "Recetas con gelatina bovina neutra RAIAN 260 Bloom organizadas por categoria, con ingredientes, tiempos, alergenos y tablas nutricionales estimadas.",
  alternates: {
    canonical: "/recetas"
  }
};

export default function RecipesPage({ searchParams }: RecipesPageProps) {
  const selectedCategory = isRecipeCategory(searchParams?.tipo)
    ? searchParams?.tipo
    : isRecipeCategory(searchParams?.categoria)
      ? searchParams?.categoria
      : undefined;
  const selectedDiet = isRecipeDiet(searchParams?.apta) ? searchParams.apta : undefined;
  const visibleRecipes = getRecipesByFilters({ category: selectedCategory, diet: selectedDiet });
  const ratingSummaries = getRecipeRatingSummaries();
  const selectedCategoryLabel = selectedCategory ? getRecipeCategoryLabel(selectedCategory) : "Todos los tipos";
  const selectedDietLabel = selectedDiet ? getRecipeDietLabel(selectedDiet) : undefined;
  const activeFilterLabel = [selectedCategoryLabel, selectedDietLabel].filter(Boolean).join(" · ");

  const buildFilterHref = ({
    category = selectedCategory,
    diet = selectedDiet
  }: {
    category?: RecipeCategory;
    diet?: RecipeDiet;
  }) => {
    const params = new URLSearchParams();

    if (category) {
      params.set("tipo", category);
    }

    if (diet) {
      params.set("apta", diet);
    }

    const query = params.toString();

    return query ? `/recetas?${query}` : "/recetas";
  };

  const filterClass = (isSelected: boolean) =>
    `inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 ${
      isSelected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-olive hover:text-olive"
    }`;

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: activeFilterLabel ? `Recetas ${activeFilterLabel} RAIAN` : "Recetas RAIAN",
    numberOfItems: visibleRecipes.length,
    itemListElement: visibleRecipes.map((recipe, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/recetas/${recipe.slug}`),
      name: recipe.title,
      description: recipe.metaDescription
    }))
  };

  return (
    <>
      <JsonLd data={listJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Usos y recetas", href: "/recetas" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Usos y recetas", href: "/recetas" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Contenido util"
            title="Recetas con gelatina bovina neutra RAIAN 260 Bloom."
            description="Explora recetas con ingredientes en gramos, tiempos claros, alergenos destacados y tablas nutricionales estimadas. Filtra por tipo o por necesidades como sin lactosa y sin gluten."
          />
          <div className="mt-8 space-y-5" aria-label="Filtrar recetas">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-ink">Tipo</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={buildFilterHref({ category: undefined })}
                  prefetch={false}
                  aria-current={!selectedCategory ? "page" : undefined}
                  className={filterClass(!selectedCategory)}
                >
                  Todos ({getRecipesByFilters({ diet: selectedDiet }).length})
                </Link>
                {recipeCategories.map((category) => {
                  const isSelected = category.slug === selectedCategory;
                  const count = getRecipesByFilters({ category: category.slug, diet: selectedDiet }).length;

                  return (
                    <Link
                      key={category.slug}
                      href={buildFilterHref({ category: category.slug })}
                      prefetch={false}
                      aria-current={isSelected ? "page" : undefined}
                      className={filterClass(isSelected)}
                    >
                      {category.label} ({count})
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-ink">Apta para</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={buildFilterHref({ diet: undefined })}
                  prefetch={false}
                  aria-current={!selectedDiet ? "page" : undefined}
                  className={filterClass(!selectedDiet)}
                >
                  Todas ({getRecipesByFilters({ category: selectedCategory }).length})
                </Link>
                {recipeDietFilters.map((diet) => {
                  const isSelected = diet.slug === selectedDiet;
                  const count = getRecipesByFilters({ category: selectedCategory, diet: diet.slug }).length;

                  return (
                    <Link
                      key={diet.slug}
                      href={buildFilterHref({ diet: diet.slug })}
                      prefetch={false}
                      aria-current={isSelected ? "page" : undefined}
                      className={filterClass(isSelected)}
                    >
                      {diet.label} ({count})
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="mb-8 flex flex-col gap-2 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-olive">{activeFilterLabel}</p>
              <h2 className="mt-2 font-display text-3xl text-ink">Recetas</h2>
            </div>
            <p className="text-sm leading-6 text-muted">
              {visibleRecipes.length} recetas encontradas con titulo, descripcion y URL propia.
            </p>
          </div>
          {visibleRecipes.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleRecipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} rating={ratingSummaries[recipe.slug]} />
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-line bg-cream p-8 text-center">
              <h3 className="font-display text-3xl leading-tight text-ink">No hay recetas con esos filtros</h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
                Prueba con otro tipo de receta o quita una restriccion para ver mas opciones.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
