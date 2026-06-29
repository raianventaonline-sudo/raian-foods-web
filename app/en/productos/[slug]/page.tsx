import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { NutritionTable } from "@/components/NutritionTable";
import { ProductHero } from "@/components/ProductHero";
import { ProductProcessVideo } from "@/components/ProductProcessVideo";
import { ProductTechnicalTable } from "@/components/ProductTechnicalTable";
import { QrReviewPrompt } from "@/components/QrReviewPrompt";
import { RecipeCard } from "@/components/RecipeCard";
import { RelatedProducts } from "@/components/RelatedProducts";
import { ReviewCTA, ReviewFloatingBubble } from "@/components/ReviewWidget";
import { SectionTitle } from "@/components/SectionTitle";
import { SupportNotice } from "@/components/SupportNotice";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { getRecipesForProduct } from "@/data/recipes";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";
import { translateProductToEn } from "@/lib/en-translate";
import { translateText } from "@/lib/i18n";

type ProductPageProps = {
  params: { slug: string };
};

const isPendingValue = (value: string) => value.toLowerCase().includes("pendiente");

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const raw = getProductBySlug(params.slug);
  if (!raw) return { title: "Product not found" };
  const product = translateProductToEn(raw);

  const ogImage = raw.mainImage.available ? raw.mainImage.src : siteConfig.logo;
  const metaDescription = product.seoDescription ?? product.shortDescription;
  const socialTitle = product.seoTitle ?? `${product.name} | RAIAN Foods`;

  return {
    title: product.seoTitle ? { absolute: product.seoTitle } : product.name,
    description: metaDescription,
    alternates: {
      canonical: `/en/productos/${raw.slug}`,
      languages: {
        es: `/productos/${raw.slug}`,
        en: `/en/productos/${raw.slug}`,
        "x-default": `/productos/${raw.slug}`
      }
    },
    openGraph: {
      title: socialTitle,
      description: metaDescription,
      type: "website",
      url: `/en/productos/${raw.slug}`,
      images: [{ url: ogImage, alt: raw.mainImage.alt }],
      locale: "en_GB"
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: metaDescription,
      images: [ogImage]
    }
  };
}

export default function EnProductPage({ params }: ProductPageProps) {
  const raw = getProductBySlug(params.slug);
  if (!raw) notFound();

  const product = translateProductToEn(raw);
  const relatedProducts = getRelatedProducts(raw);
  const relatedRecipes = getRecipesForProduct(raw.recipeSlugs);
  const technicalRows = product.technicalSheet.filter((row) => !isPendingValue(row.value));
  const nutritionRows = product.nutrition.filter((row) => !isPendingValue(row.value));
  const faqs = product.faqs ?? [];
  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        }
      : null;

  const t = (s: string) => translateText(s, "en");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/en" },
          { name: "Products", href: "/en/productos" },
          { name: product.name, href: `/en/productos/${raw.slug}` }
        ])}
      />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <QrReviewPrompt productSlug={raw.slug} productName={product.name} reviewUrl={raw.amazonReviewUrl} />
      <ReviewFloatingBubble reviewUrl={raw.amazonReviewUrl} productName={product.name} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/en" },
          { label: "Products", href: "/en/productos" },
          { label: product.name, href: `/en/productos/${raw.slug}` }
        ]}
      />
      <ProductHero product={product} />

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] md:px-8">
          <SectionTitle eyebrow={t("Descripción")} title={t("Información clara para entender el producto.")} />
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>{product.description}</p>
            <p>
              We only show available data or data pending validation, transparently. The final information must always match the product labelling and documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle eyebrow={t("Usos")} title={t("Aplicaciones habituales.")} />
            <ul className="mt-8 space-y-3">
              {product.uses.map((use) => (
                <li key={use} className="rounded-md border border-line bg-sage px-4 py-3 text-sm leading-6 text-muted">
                  {use}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow={t("Uso orientativo")} title={t("Pautas generales.")} />
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
            <SectionTitle eyebrow={t("Ficha técnica")} title={t("Datos disponibles.")} />
            <div className="mt-8">
              {technicalRows.length > 0 ? (
                <ProductTechnicalTable rows={technicalRows} />
              ) : (
                <p className="rounded-md border border-line bg-white p-5 text-sm leading-7 text-muted">
                  Technical information pending validation with the final product documentation.
                </p>
              )}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow={t("Información nutricional")} title={t("Valores por 100 g.")} />
            <div className="mt-8">
              {nutritionRows.length > 0 ? (
                <NutritionTable rows={nutritionRows} />
              ) : (
                <p className="rounded-md border border-line bg-white p-5 text-sm leading-7 text-muted">
                  Nutrition information pending validation with the final labelling.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <article className="rounded-md border border-line bg-sage p-6">
            <h2 className="font-display text-3xl text-ink">{t("Alérgenos")}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{product.allergens}</p>
          </article>
          <article className="rounded-md border border-line bg-sage p-6">
            <h2 className="font-display text-3xl text-ink">{t("Conservación")}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{product.conservation}</p>
          </article>
        </div>
        <div
          className={`mx-auto mt-6 grid w-full max-w-7xl gap-6 px-5 md:px-8 ${
            raw.amazonReviewUrl ? "md:grid-cols-2" : ""
          }`}
        >
          <ReviewCTA reviewUrl={raw.amazonReviewUrl} productName={product.name} />
          <SupportNotice />
        </div>
      </section>

      {faqs.length > 0 ? (
        <section className="bg-cream py-12 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <SectionTitle eyebrow={t("Preguntas frecuentes")} title={`Common questions about ${product.name.toLowerCase()}.`} />
            <div className="mt-8 divide-y divide-line rounded-md border border-line bg-white">
              {faqs.map((item) => (
                <details key={item.question} className="group px-5 py-4">
                  <summary className="cursor-pointer list-none font-display text-lg leading-snug text-ink marker:hidden">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedRecipes.length > 0 ? (
        <section className="bg-cream py-12 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionTitle
                eyebrow="Uses & recipes"
                title="Practical content for this product."
                description="Guides and usage ideas to accompany the product with useful, easy-to-consult information."
              />
              <Link
                href={`/en/recetas?producto=${raw.slug}`}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-beige"
              >
                {t("Ver todas las recetas")}
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
          </div>
        </section>
      ) : null}

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow={t("Productos relacionados")} title={t("Otras referencias del catálogo.")} />
          <div className="mt-8">
            <RelatedProducts products={relatedProducts} />
          </div>
        </div>
      </section>

      <ProductProcessVideo
        eyebrow={t("Nuestro proceso")}
        title={t("Así preparamos cada lote, paso a paso.")}
        description={t(
          "Un vistazo real a la preparación de producto en nuestras instalaciones, con el mismo cuidado que ponemos en cada ficha y cada envase."
        )}
      />
    </>
  );
}
