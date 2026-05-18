import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionTitle } from "@/components/SectionTitle";
import {
  getRecipeCategoryLabel,
  getRecipeDietLabel,
  getRecipeProductLabel,
  getRecipesByFilters,
  isRecipeCategory,
  isRecipeDiet,
  isRecipeProductSlug,
  recipeCategories,
  recipeDietFilters,
  recipeProductFilters,
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
    producto?: string | string[];
  };
};

export const metadata: Metadata = {
  title: "Usos y recetas",
  description:
    "Recetas RAIAN para hacer en casa, organizadas por tipo, necesidades alimentarias y productos del catalogo.",
  alternates: {
    canonical: "/recetas"
  }
};

const getSearchParamValues = (value?: string | string[]) => {
  const values = Array.isArray(value) ? value : value ? [value] : [];

  return values
    .flatMap((item) => item.split(","))
    .map((item) => item.trim())
    .filter(Boolean);
};

export default function RecipesPage({ searchParams }: RecipesPageProps) {
  const selectedCategory = isRecipeCategory(searchParams?.tipo)
    ? searchParams?.tipo
    : isRecipeCategory(searchParams?.categoria)
      ? searchParams?.categoria
      : undefined;
  const selectedDiet = isRecipeDiet(searchParams?.apta) ? searchParams.apta : undefined;
  const selectedProductSlugs = Array.from(new Set(getSearchParamValues(searchParams?.producto))).filter(isRecipeProductSlug);
  const visibleRecipes = getRecipesByFilters({
    category: selectedCategory,
    diet: selectedDiet,
    productSlugs: selectedProductSlugs
  });
  const ratingSummaries = getRecipeRatingSummaries();
  const selectedCategoryLabel = selectedCategory ? getRecipeCategoryLabel(selectedCategory) : "Todos los tipos";
  const selectedDietLabel = selectedDiet ? getRecipeDietLabel(selectedDiet) : undefined;
  const selectedProductLabels = selectedProductSlugs.map(getRecipeProductLabel);
  const filterSummaryLabel = [selectedCategoryLabel, selectedDietLabel, ...selectedProductLabels].filter(Boolean).join(" / ");
  const legacyFilterLabel = filterSummaryLabel;
  const displayedFilterLabel = [selectedCategoryLabel, selectedDietLabel, ...selectedProductLabels].filter(Boolean).join(" · ");
  const activeFilterLabel = [selectedCategoryLabel, selectedDietLabel].filter(Boolean).join(" · ");

  const buildFilterHref = ({
    category = selectedCategory,
    diet = selectedDiet,
    productSlugs = selectedProductSlugs
  }: {
    category?: RecipeCategory;
    diet?: RecipeDiet;
    productSlugs?: string[];
  }) => {
    const params = new URLSearchParams();

    if (category) {
      params.set("tipo", category);
    }

    if (diet) {
      params.set("apta", diet);
    }

    if (productSlugs.length > 0) {
      params.set("producto", productSlugs.join(","));
    }

    const query = params.toString();

    return query ? `/recetas?${query}` : "/recetas";
  };

  const toggleProductSlug = (slug: string) =>
    selectedProductSlugs.includes(slug)
      ? selectedProductSlugs.filter((selectedSlug) => selectedSlug !== slug)
      : [...selectedProductSlugs, slug];

  const filterClass = (isSelected: boolean) =>
    `inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 ${
      isSelected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-olive hover:text-olive"
    }`;

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: filterSummaryLabel
      ? `Recetas ${filterSummaryLabel} RAIAN`
      : legacyFilterLabel || displayedFilterLabel || activeFilterLabel
        ? `Recetas ${legacyFilterLabel || displayedFilterLabel || activeFilterLabel} RAIAN`
        : "Recetas RAIAN",
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
      <section className="raian-mesh-cream py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Recetas"
            title="Recetas para hacer en casa con ingredientes claros."
            description="Inspírate con preparaciones dulces y saladas, tiempos claros e ingredientes medidos. Filtra por tipo, por necesidades alimentarias o por los productos RAIAN que quieras utilizar."
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
                  Todos ({getRecipesByFilters({ diet: selectedDiet, productSlugs: selectedProductSlugs }).length})
                </Link>
                {recipeCategories.map((category) => {
                  const isSelected = category.slug === selectedCategory;
                  const count = getRecipesByFilters({
                    category: category.slug,
                    diet: selectedDiet,
                    productSlugs: selectedProductSlugs
                  }).length;

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
                  Todas ({getRecipesByFilters({ category: selectedCategory, productSlugs: selectedProductSlugs }).length})
                </Link>
                {recipeDietFilters.map((diet) => {
                  const isSelected = diet.slug === selectedDiet;
                  const count = getRecipesByFilters({
                    category: selectedCategory,
                    diet: diet.slug,
                    productSlugs: selectedProductSlugs
                  }).length;

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
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <p className="text-sm font-bold uppercase text-ink">Producto RAIAN</p>
                {selectedProductSlugs.length > 0 ? (
                  <Link
                    href={buildFilterHref({ productSlugs: [] })}
                    prefetch={false}
                    className="text-sm font-semibold text-olive transition hover:text-terracotta"
                  >
                    Quitar productos
                  </Link>
                ) : null}
              </div>
              <p className="mb-3 max-w-2xl text-sm leading-6 text-muted">
                Selecciona uno o varios. Si marcas varios, se mostrarán recetas que contengan todos esos productos.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={buildFilterHref({ productSlugs: [] })}
                  prefetch={false}
                  aria-current={selectedProductSlugs.length === 0 ? "page" : undefined}
                  className={filterClass(selectedProductSlugs.length === 0)}
                >
                  Todos los productos ({getRecipesByFilters({ category: selectedCategory, diet: selectedDiet }).length})
                </Link>
                {recipeProductFilters.map((product) => {
                  const isSelected = selectedProductSlugs.includes(product.slug);
                  const nextProductSlugs = toggleProductSlug(product.slug);
                  const count = getRecipesByFilters({
                    category: selectedCategory,
                    diet: selectedDiet,
                    productSlugs: [product.slug]
                  }).length;

                  return (
                    <Link
                      key={product.slug}
                      href={buildFilterHref({ productSlugs: nextProductSlugs })}
                      prefetch={false}
                      aria-current={isSelected ? "page" : undefined}
                      className={`${filterClass(isSelected)} gap-2`}
                    >
                      <span
                        aria-hidden="true"
                        className={`grid size-4 place-items-center rounded border ${
                          isSelected ? "border-white bg-white" : "border-line bg-white"
                        }`}
                      >
                        <span className={`size-2 rounded-sm ${isSelected ? "bg-ink" : "bg-transparent"}`} />
                      </span>
                      {product.label} ({count})
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
              <p className="text-sm font-bold uppercase text-olive">{filterSummaryLabel}</p>
              <h2 className="mt-2 font-display text-3xl text-ink">Recetas</h2>
            </div>
            <p className="text-sm leading-6 text-muted">
              {visibleRecipes.length} recetas encontradas con titulo, descripcion y URL propia.
            </p>
          </div>
          {visibleRecipes.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleRecipes.map((recipe, index) => (
                <RecipeCard key={recipe.slug} recipe={recipe} rating={ratingSummaries[recipe.slug]} index={index} />
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
