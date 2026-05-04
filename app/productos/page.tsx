import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ProductSearch } from "@/components/ProductSearch";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/data/products";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo de productos alimenticios RAIAN Foods: gelatinas, harina de almendra e ingredientes alimentarios con fichas editables.",
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
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.85fr] md:items-center md:px-8">
          <SectionTitle
            eyebrow="Catálogo RAIAN Foods"
            title="Productos alimentarios seleccionados para el consumidor final."
            description="Cada referencia cuenta con una ficha preparada para añadir imágenes reales, datos técnicos verificados, usos prácticos, información nutricional y enlace de compra en Amazon."
          />
          <div className="overflow-hidden rounded-lg border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/brand/catalogo-raian-foods-oficina.png"
              alt="Catálogo de productos RAIAN Foods en oficina"
              width={1254}
              height={1254}
              priority
              className="aspect-[4/3] w-full rounded-md object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
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
        title="¿Buscas información concreta de un producto?"
        description="Las fichas están listas para ampliar detalles técnicos, resolver dudas de uso y conectar cada referencia con su listing de Amazon."
        href="/contacto"
        label="Contactar"
      />
    </>
  );
}
