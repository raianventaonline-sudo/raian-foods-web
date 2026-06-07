import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { NutritionTable } from "@/components/NutritionTable";
import { ProductHero } from "@/components/ProductHero";
import { ProductTechnicalTable } from "@/components/ProductTechnicalTable";
import { QrReviewPrompt } from "@/components/QrReviewPrompt";
import { RecipeCard } from "@/components/RecipeCard";
import { RelatedProducts } from "@/components/RelatedProducts";
import { SectionTitle } from "@/components/SectionTitle";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { getRecipesForProduct } from "@/data/recipes";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

const isPendingValue = (value: string) => value.toLowerCase().includes("pendiente");

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Producto no encontrado"
    };
  }

  const ogImage = product.mainImage.available ? product.mainImage.src : siteConfig.logo;

  return {
    title: `${product.name} RAIAN`,
    description: product.shortDescription,
    alternates: {
      canonical: `/productos/${product.slug}`
    },
    openGraph: {
      title: `${product.name} | RAIAN`,
      description: product.shortDescription,
      type: "website",
      url: `/productos/${product.slug}`,
      images: [{ url: ogImage, alt: product.mainImage.alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | RAIAN`,
      description: product.shortDescription,
      images: [ogImage]
    }
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const relatedRecipes = getRecipesForProduct(product.recipeSlugs);
  const technicalRows = product.technicalSheet.filter((row) => !isPendingValue(row.value));
  const nutritionRows = product.nutrition.filter((row) => !isPendingValue(row.value));

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Productos", href: "/productos" },
          { name: product.name, href: `/productos/${product.slug}` }
        ])}
      />
      <QrReviewPrompt
        productSlug={product.slug}
        productName={product.name}
        reviewUrl={product.amazonReviewUrl}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: product.name, href: `/productos/${product.slug}` }
        ]}
      />
      <ProductHero product={product} />

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] md:px-8">
          <SectionTitle eyebrow="Descripción" title="Información clara para entender el producto." />
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>{product.description}</p>
            <p>
              Mostramos únicamente datos disponibles o pendientes de validación de forma transparente. La información final
              debe coincidir siempre con el etiquetado y la documentación del producto.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle eyebrow="Usos" title="Aplicaciones habituales." />
            <ul className="mt-8 space-y-3">
              {product.uses.map((use) => (
                <li key={use} className="rounded-md border border-line bg-sage px-4 py-3 text-sm leading-6 text-muted">
                  {use}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Uso orientativo" title="Pautas generales." />
            <ol className="mt-8 space-y-3">
              {product.howToUse.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-md border border-line bg-white px-4 py-4 text-sm leading-6 text-muted">
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

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle eyebrow="Ficha técnica" title="Datos disponibles." />
            <div className="mt-8">
              {technicalRows.length > 0 ? (
                <ProductTechnicalTable rows={technicalRows} />
              ) : (
                <p className="rounded-md border border-line bg-white p-5 text-sm leading-7 text-muted">
                  Información técnica pendiente de validar con la documentación final del producto.
                </p>
              )}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Información nutricional" title="Valores por 100 g." />
            <div className="mt-8">
              {nutritionRows.length > 0 ? (
                <NutritionTable rows={nutritionRows} />
              ) : (
                <p className="rounded-md border border-line bg-white p-5 text-sm leading-7 text-muted">
                  Información nutricional pendiente de validar con el etiquetado final.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <article className="rounded-md border border-line bg-sage p-6">
            <h2 className="font-display text-3xl text-ink">Alérgenos</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{product.allergens}</p>
          </article>
          <article className="rounded-md border border-line bg-sage p-6">
            <h2 className="font-display text-3xl text-ink">Conservación</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{product.conservation}</p>
          </article>
        </div>
      </section>

      {relatedRecipes.length > 0 ? (
        <section className="bg-cream py-12 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionTitle
                eyebrow="Usos y recetas"
                title="Contenido práctico asociado."
                description="Guías y usos en preparación para acompañar el producto con información útil y fácil de consultar."
              />
              <Link
                href={`/recetas?producto=${product.slug}`}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-beige"
              >
                Ver todas las recetas
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedRecipes.map((recipe, index) => (
                <RecipeCard key={recipe.slug} recipe={recipe} index={index} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                href={`/recetas?producto=${product.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-charcoal"
              >
                Ver todas las recetas con {product.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Productos relacionados" title="Otras referencias del catálogo." />
          <div className="mt-8">
            <RelatedProducts products={relatedProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
