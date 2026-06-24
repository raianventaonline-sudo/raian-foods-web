import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmailShareForm } from "@/components/EmailShareForm";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { QrRecipeReviewBanner } from "@/components/QrReviewPrompt";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeRating } from "@/components/RecipeRating";
import { ReviewFloatingBubble } from "@/components/ReviewWidget";
import { getProductBySlug } from "@/data/products";
import {
  getRecipeBySlug,
  recipeProduct,
  recipes,
  type Recipe,
  type RecipeNutrition
} from "@/data/recipes";
import { siteConfig } from "@/data/site";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

type RecipePageProps = {
  params: {
    slug: string;
  };
};

const numberFormat = new Intl.NumberFormat("es-ES", {
  maximumFractionDigits: 1
});

const formatNumber = (value: number) => numberFormat.format(value);

const formatDuration = (minutes: number) => {
  if (minutes === 0) {
    return "0 min";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return remainingMinutes > 0 ? `${hours} h ${remainingMinutes} min` : `${hours} h`;
};

const toIsoDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0 && remainingMinutes > 0) {
    return `PT${hours}H${remainingMinutes}M`;
  }

  if (hours > 0) {
    return `PT${hours}H`;
  }

  return `PT${minutes}M`;
};

const nutritionRows = (nutrition: RecipeNutrition) => [
  { label: "Valor energético", value: `${formatNumber(nutrition.kcal)} kcal` },
  { label: "Grasas", value: `${formatNumber(nutrition.fat)} g` },
  { label: "De las cuales saturadas", value: `${formatNumber(nutrition.sat_fat)} g` },
  { label: "Hidratos de carbono", value: `${formatNumber(nutrition.carbs)} g` },
  { label: "De los cuales azúcares", value: `${formatNumber(nutrition.sugars)} g` },
  { label: "Proteínas", value: `${formatNumber(nutrition.protein)} g` },
  { label: "Fibra", value: `${formatNumber(nutrition.fiber)} g` },
  { label: "Sal", value: `${formatNumber(nutrition.salt)} g` }
];

const recipeJsonLd = (recipe: Recipe) => ({
  "@context": "https://schema.org",
  "@type": "Recipe",
  name: recipe.title,
  description: recipe.metaDescription,
  url: absoluteUrl(`/recetas/${recipe.slug}`),
  image: recipe.image.available ? absoluteUrl(recipe.image.src) : absoluteUrl(siteConfig.logo),
  author: {
    "@type": "Organization",
    name: "RAIAN"
  },
  recipeCategory: recipe.categoryLabel,
  recipeCuisine: "Española",
  recipeYield: `${recipe.servings} raciones`,
  prepTime: toIsoDuration(recipe.times.prep_min),
  cookTime: toIsoDuration(recipe.times.cook_min),
  totalTime: toIsoDuration(recipe.times.total_min),
  keywords: recipe.keywords.join(", "),
  recipeIngredient: recipe.ingredients.map((ingredient) => `${ingredient.name}: ${ingredient.g} g`),
  recipeInstructions: recipe.steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    text: step
  })),
  nutrition: {
    "@type": "NutritionInformation",
    calories: `${recipe.nutrition_per_serving.kcal} kcal`,
    proteinContent: `${recipe.nutrition_per_serving.protein} g`,
    carbohydrateContent: `${recipe.nutrition_per_serving.carbs} g`,
    sugarContent: `${recipe.nutrition_per_serving.sugars} g`,
    fatContent: `${recipe.nutrition_per_serving.fat} g`,
    saturatedFatContent: `${recipe.nutrition_per_serving.sat_fat} g`,
    fiberContent: `${recipe.nutrition_per_serving.fiber} g`
  }
});

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug
  }));
}

export function generateMetadata({ params }: RecipePageProps): Metadata {
  const recipe = getRecipeBySlug(params.slug);

  if (!recipe) {
    return {
      title: "Receta no encontrada"
    };
  }

  const ogImage = recipe.image.available ? recipe.image.src : siteConfig.logo;

  return {
    title: recipe.seoTitle,
    description: recipe.metaDescription,
    alternates: {
      canonical: `/recetas/${recipe.slug}`,
      languages: { en: `/en/recetas/${recipe.slug}`, "x-default": `/recetas/${recipe.slug}` }
    },
    openGraph: {
      title: recipe.seoTitle,
      description: recipe.metaDescription,
      type: "article",
      url: `/recetas/${recipe.slug}`,
      images: [{ url: ogImage, alt: recipe.image.alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.seoTitle,
      description: recipe.metaDescription,
      images: [ogImage]
    }
  };
}

function NutritionTable({
  title,
  rows
}: {
  title: string;
  rows: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <h2 className="border-b border-line bg-sage px-4 py-3 text-sm font-bold uppercase text-ink">{title}</h2>
      <dl className="divide-y divide-line">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[1.25fr_0.75fr] gap-4 px-4 py-3 text-sm">
            <dt className="font-semibold text-ink">{row.label}</dt>
            <dd className="text-right text-muted">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipeBySlug(params.slug);

  if (!recipe) {
    notFound();
  }

  const relatedProduct = getProductBySlug(recipe.relatedProductSlug);
  const recipeUrl = absoluteUrl(`/recetas/${recipe.slug}`);
  const emailSubject = `Receta RAIAN: ${recipe.title}`;
  const emailBody = `Te comparto esta receta de RAIAN:\n\n${recipe.title}\n${recipeUrl}`;
  const emailHref = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const moreRecipes = recipes
    .filter((r) => r.slug !== recipe.slug && r.category === recipe.category)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={recipeJsonLd(recipe)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Usos y recetas", href: "/recetas" },
          { name: recipe.title, href: `/recetas/${recipe.slug}` }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Usos y recetas", href: "/recetas" },
          { label: recipe.title, href: `/recetas/${recipe.slug}` }
        ]}
      />

      <section className="raian-mesh-cream py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">{recipe.categoryLabel}</p>
            <h1 className="raian-display-balance mt-4 font-display text-4xl font-medium leading-[1.05] text-ink md:text-6xl">{recipe.title}</h1>
            <p className="mt-5 text-base leading-8 text-muted md:text-lg">{recipe.intro}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-line bg-white p-4">
                <p className="text-sm font-semibold text-ink">Raciones</p>
                <p className="mt-1 text-sm text-muted">
                  {recipe.servings} raciones · {recipe.estimated_serving_g} g aprox. por ración
                </p>
              </div>
              <div className="rounded-md border border-line bg-white p-4">
                <p className="text-sm font-semibold text-ink">Producto relacionado</p>
                <Link
                  href={`/productos/${recipe.relatedProductSlug}`}
                  className="mt-1 inline-block text-sm font-semibold text-olive transition hover:text-terracotta"
                >
                  {recipe.relatedProduct}
                </Link>
              </div>
            </div>
            <RecipeRating recipeSlug={recipe.slug} recipeTitle={recipe.title} />
            <a
              href={emailHref}
              className="raian-button-glow mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
            >
              Enviar por correo
            </a>
          </div>
          <PlaceholderMedia asset={recipe.image} className="aspect-[4/3]" priority sizes="(min-width: 1024px) 44vw, 100vw" />
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 md:grid-cols-4 md:px-8">
          {[
            ["Preparación", recipe.times.prep_min],
            ["Cocción", recipe.times.cook_min],
            ["Reposo", recipe.times.rest_min],
            ["Total", recipe.times.total_min]
          ].map(([label, minutes]) => (
            <div key={label} className="rounded-md border border-line bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-olive">{label}</p>
              <p className="mt-2 font-display text-3xl text-ink">{formatDuration(Number(minutes))}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div>
            <h2 className="font-display text-3xl text-ink">Ingredientes</h2>
            <ul className="mt-6 space-y-3">
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient.key}
                  className="flex items-center justify-between gap-4 rounded-md border border-line bg-white px-4 py-3 text-sm"
                >
                  <span className="font-semibold text-ink">{ingredient.name}</span>
                  <span className="shrink-0 text-muted">{ingredient.g} g</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink">Preparación</h2>
            <ol className="mt-6 space-y-4">
              {recipe.steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-md border border-line bg-white px-4 py-4 text-sm leading-7 text-muted">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-olive text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 lg:grid-cols-2 md:px-8">
          <NutritionTable title="Nutrición estimada por ración" rows={nutritionRows(recipe.nutrition_per_serving)} />
          <NutritionTable title="Nutrición estimada por 100 g" rows={nutritionRows(recipe.nutrition_per_100g_estimated)} />
        </div>
        <div className="mx-auto mt-6 grid w-full max-w-7xl gap-6 px-5 lg:grid-cols-2 md:px-8">
          <article className="rounded-md border border-line bg-sage p-6">
            <h2 className="font-display text-3xl text-ink">Alérgenos</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              {recipe.allergens.length > 0 ? (
                <>
                  Alérgenos destacados:{" "}
                  <strong className="text-ink">{recipe.allergens.join(", ")}</strong>.
                </>
              ) : (
                "Sin alérgenos destacados en la receta según la fuente estructurada."
              )}
              {recipe.ingredients.some((ingredient) => ingredient.name.toLowerCase().includes("gelatina")) ? (
                <>
                  {" "}
                  La gelatina (bovina o porcina) es de origen animal y no es apta para dietas vegetarianas o veganas.
                </>
              ) : null}
            </p>
          </article>
          <article className="rounded-md border border-line bg-sage p-6">
            <h2 className="font-display text-3xl text-ink">Consejo RAIAN</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{recipeProduct.dosageNote}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Hidrata siempre la gelatina en agua fría antes de añadirla a una mezcla caliente y evita hervir fuerte
              después de incorporarla.
            </p>
            {recipe.notes ? (
              <p className="mt-3 text-sm leading-7 text-muted">{recipe.notes}</p>
            ) : null}
          </article>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <EmailShareForm title={recipe.title} url={recipeUrl} />
        </div>
      </section>

      {moreRecipes.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Recetas</p>
                <h2 className="raian-display-balance mt-2 font-display text-3xl font-medium text-ink md:text-4xl">
                  Más recetas para ti.
                </h2>
              </div>
              <Link
                href="/recetas"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-beige"
              >
                Ver todas las recetas
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {moreRecipes.map((r, i) => (
                <RecipeCard key={r.slug} recipe={r} index={i} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                href="/recetas"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-charcoal"
              >
                Ver el recetario completo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <QrRecipeReviewBanner />
      <ReviewFloatingBubble
        reviewUrl={relatedProduct?.amazonReviewUrl}
        productName={relatedProduct?.name ?? recipe.relatedProduct}
      />
    </>
  );
}
