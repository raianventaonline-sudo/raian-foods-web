import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Guías",
  description:
    "Guías RAIAN sobre ingredientes alimentarios: qué son, para qué sirven y cómo usarlos con criterio en tus recetas.",
  alternates: {
    canonical: "/guias"
  }
};

const guides = [
  {
    href: "/guias/gelatina-neutra",
    title: "Gelatina neutra: qué es, usos y cómo usarla",
    text: "Qué es la gelatina neutra, qué significa 260 Bloom, diferencias entre bovina y porcina y cómo hidratarla paso a paso."
  }
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Guías", href: "/guias" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Guías", href: "/guias" }
        ]}
      />

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Guías RAIAN"
            title="Contenido práctico para entender cada ingrediente."
            description="Guías claras sobre los productos del catálogo: qué son, para qué sirven y cómo aprovecharlos en tus elaboraciones."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="raian-card flex h-full flex-col rounded-md border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="font-display text-2xl leading-tight text-ink">{guide.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{guide.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-olive">
                  Leer guía
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
