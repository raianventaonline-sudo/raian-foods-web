import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ProductSearch } from "@/components/ProductSearch";
import { products } from "@/data/products";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";

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
        data={itemListJsonLd(
          products.map((product) => ({ name: product.name, url: `/productos/${product.slug}` }))
        )}
      />
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
      <section className="raian-mesh-cream py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.92fr_1fr] lg:items-center md:px-8">
          <div className="raian-media overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/brand/mapa-espana-ingredientes.webp"
              alt="Mapa de España compuesto con ingredientes alimentarios"
              width={1536}
              height={1024}
              priority
              className="raian-media-image aspect-[16/9] w-full rounded-xl object-cover"
              sizes="(min-width: 1024px) 31vw, 100vw"
            />
          </div>
          <div className="text-center lg:px-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Catálogo RAIAN</p>
            <h1 className="raian-display-balance font-display text-4xl font-medium leading-[1.05] text-ink md:text-5xl">
              Productos alimenticios seleccionados y presentados con claridad.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted md:text-lg">
              Referencias, usos habituales y datos disponibles organizados para facilitar la decisión de compra.
            </p>
          </div>
          <div className="raian-media overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/brand/catalogo-raian-foods-oficina.png"
              alt="Composición visual del catálogo RAIAN en un entorno corporativo"
              width={1254}
              height={1254}
              priority
              className="raian-media-image aspect-[16/9] w-full rounded-xl object-cover"
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
