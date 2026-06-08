import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedProducts } from "@/components/RelatedProducts";
import { SectionTitle } from "@/components/SectionTitle";
import { getGuideBySlug, guides } from "@/data/guides";
import { getProductBySlug } from "@/data/products";
import { siteConfig } from "@/data/site";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { translateGuideToEn, translateProductToEn } from "@/lib/en-translate";

type GuidePageProps = { params: { slug: string } };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const raw = getGuideBySlug(params.slug);
  if (!raw) return { title: "Guide not found" };
  const guide = translateGuideToEn(raw);
  const guidePath = `/en/guias/${raw.slug}`;
  const ogImage = raw.heroImage?.src ?? siteConfig.logo;

  return {
    title: { absolute: guide.metaTitle },
    description: guide.description,
    alternates: {
      canonical: guidePath,
      languages: {
        es: `/guias/${raw.slug}`,
        en: guidePath,
        "x-default": `/guias/${raw.slug}`
      }
    },
    openGraph: {
      title: `${guide.metaTitle} | RAIAN Foods`,
      description: guide.description,
      type: "article",
      url: guidePath,
      images: [{ url: ogImage, alt: raw.heroImage?.alt ?? guide.title }],
      locale: "en_GB"
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.metaTitle} | RAIAN Foods`,
      description: guide.description,
      images: [ogImage]
    }
  };
}

export default function EnGuidePage({ params }: GuidePageProps) {
  const raw = getGuideBySlug(params.slug);
  if (!raw) notFound();

  const guide = translateGuideToEn(raw);
  const guidePath = `/en/guias/${raw.slug}`;
  const rawPrimaryProduct = getProductBySlug(raw.primaryProductSlug);
  const primaryProduct = rawPrimaryProduct ? translateProductToEn(rawPrimaryProduct) : null;
  const relatedProducts = raw.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map(translateProductToEn);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: absoluteUrl(raw.heroImage?.src ?? siteConfig.logo),
    inLanguage: "en-GB",
    author: { "@type": "Organization", name: "RAIAN" },
    publisher: {
      "@type": "Organization",
      name: "RAIAN",
      logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo) }
    },
    mainEntityOfPage: absoluteUrl(guidePath)
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/en" },
          { name: "Guides", href: "/en/guias" },
          { name: guide.metaTitle, href: guidePath }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/en" },
          { label: "Guides", href: "/en/guias" },
          { label: guide.metaTitle, href: guidePath }
        ]}
      />

      <section className="bg-cream py-12 md:py-16">
        <div className={`mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 ${guide.heroImage ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""}`}>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta">RAIAN Guide</p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">{guide.title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted">{guide.intro}</p>
          </div>
          {guide.heroImage ? (
            <div className="raian-media mx-auto w-full max-w-md overflow-hidden rounded-md border border-line bg-white p-3 shadow-sm">
              <Image
                src={raw.heroImage!.src}
                alt={raw.heroImage!.alt}
                width={1000}
                height={1000}
                priority
                className={`raian-media-image aspect-square w-full rounded-sm ${raw.heroImage?.fit === "cover" ? "object-cover" : "object-contain"}`}
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          ) : null}
        </div>
      </section>

      {guide.sections.map((section, index) => (
        <section key={section.heading} className={index % 2 === 0 ? "bg-white py-12 md:py-16" : "bg-cream py-12 md:py-16"}>
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] md:px-8">
            <SectionTitle eyebrow={`Point ${index + 1}`} title={section.heading} />
            <div className="space-y-5 text-base leading-8 text-muted">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={guide.sections.length % 2 === 0 ? "bg-white py-12 md:py-16" : "bg-cream py-12 md:py-16"}>
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Frequently asked questions" title="Common questions." />
          <div className="mt-8 divide-y divide-line rounded-md border border-line bg-white">
            {guide.faqs.map((item) => (
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

      {relatedProducts.length > 0 ? (
        <section className={guide.sections.length % 2 === 0 ? "bg-cream py-12 md:py-16" : "bg-white py-12 md:py-16"}>
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <SectionTitle eyebrow="RAIAN catalogue" title="Products related to this guide." />
            <div className="mt-8">
              <RelatedProducts products={relatedProducts} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-ink py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-beige">Ready to get started?</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">
              Discover the RAIAN products.
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            {primaryProduct ? (
              <Link
                href={`/en/productos/${raw.primaryProductSlug}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:bg-beige"
              >
                View product page
              </Link>
            ) : null}
            <Link
              href="/en/productos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
