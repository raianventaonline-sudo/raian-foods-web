import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ProductSearch } from "@/components/ProductSearch";
import { products } from "@/data/products";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Catálogo RAIAN de productos alimenticios seleccionados: gelatinas, harina de almendra e ingredientes con información clara y presentación cuidada.",
  alternates: {
    canonical: "/productos"
  }
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Productos", href: "/productos" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" }
        ]}
      />
      <section className="bg-cream py-10 md:py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 lg:grid-cols-[1fr_0.92fr_1fr] lg:items-center md:px-8">
          <div className="raian-media overflow-hidden rounded-md border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/brand/mapa-espana-ingredientes.webp"
              alt="Mapa de España compuesto con ingredientes alimentarios"
              width={1536}
              height={1024}
              priority
              className="raian-media-image aspect-[16/9] w-full rounded-sm object-cover"
              sizes="(min-width: 1024px) 31vw, 100vw"
            />
          </div>
          <div className="text-center lg:px-2">
            <p className="mb-3 text-sm font-semibold uppercase leading-none text-terracotta">Catálogo RAIAN</p>
            <h1 className="font-display text-3xl leading-tight text-ink md:text-4xl">
              Productos alimenticios seleccionados y presentados con claridad.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted">
              Referencias, usos habituales y datos disponibles organizados para facilitar la decisión de compra.
            </p>
          </div>
          <div className="raian-media overflow-hidden rounded-md border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/brand/catalogo-raian-foods-oficina.png"
              alt="Composición visual del catálogo RAIAN en un entorno corporativo"
              width={1254}
              height={1254}
              priority
              className="raian-media-image aspect-[16/9] w-full rounded-sm object-cover"
              sizes="(min-width: 1024px) 31vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <ProductSearch products={products} />
        </div>
      </section>
      <CTASection
        title="¿Necesitas información concreta de un producto?"
        description="Escríbenos para resolver dudas comerciales, ampliar información disponible o consultar próximas referencias del catálogo."
        href="/contacto"
        label="Contactar con RAIAN"
      />
    </>
  );
}
