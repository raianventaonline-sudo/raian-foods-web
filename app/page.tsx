import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeaturedProductsCarousel } from "@/components/FeaturedProductsCarousel";
import { HomeHero } from "@/components/HomeHero";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TrustStrip } from "@/components/TrustStrip";
import { products } from "@/data/products";
import { recipes } from "@/data/recipes";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "RAIAN Foods | Catálogo de productos alimenticios"
  },
  description:
    "Catálogo RAIAN de productos alimenticios, recetas y contenido de apoyo para consultar antes de comprar.",
  alternates: {
    canonical: "/",
    languages: { en: "/en", "x-default": "/" }
  }
};

const valueCards = [
  {
    title: "Productos seleccionados",
    text: "Referencias alimentarias elegidas por utilidad, claridad y encaje con el consumo diario.",
    image: {
      src: "/images/value/seleccion-cuidada-real.webp",
      alt: "Ingredientes alimentarios seleccionados sobre una mesa limpia"
    }
  },
  {
    title: "Presentación cuidada",
    text: "Envase, etiqueta e imagen trabajan juntos para que el producto se perciba claro y fiable.",
    image: {
      src: "/images/value/packaging-trabajado-real.webp",
      alt: "Envases alimentarios y etiquetas preparadas para packaging"
    }
  },
  {
    title: "Fichas comprensibles",
    text: "Información organizada para entender usos, formato, conservación y datos relevantes antes de comprar.",
    image: {
      src: "/images/value/informacion-clara-real.webp",
      alt: "Ficha informativa junto a muestra de ingrediente alimentario"
    }
  },
  {
    title: "Uso en el día a día",
    text: "Contenido práctico para acompañar cada referencia con ideas sencillas y criterios de uso.",
    image: {
      src: "/images/value/recetas-usos-qr-raian-foods.webp",
      alt: "Contenido de usos y recetas RAIAN visualizado en un móvil"
    }
  }
];

const methodSteps = [
  {
    title: "Seleccionamos",
    text: "Buscamos referencias alimentarias claras, útiles y con sentido dentro del catálogo."
  },
  {
    title: "Presentamos",
    text: "Cuidamos la imagen del producto para que transmita orden, calidad y coherencia de marca."
  },
  {
    title: "Explicamos",
    text: "Organizamos la información de forma sencilla para reducir dudas antes de la compra."
  }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", href: "/" }])} />

      <HomeHero />

      <TrustStrip
        eyebrow="RAIAN Foods en números"
        items={[
          { value: products.length, label: "Referencias", hint: "Catálogo activo y en crecimiento" },
          { value: recipes.length, suffix: "+", label: "Recetas", hint: "Usos prácticos con cada producto" },
          { value: 100, suffix: " %", label: "Producto España", hint: "Trazabilidad y origen claro" },
          { value: 24, suffix: " h", label: "Atención", hint: "Respuesta rápida a tiendas y clientes" }
        ]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Qué ofrece RAIAN"
              title="Una marca alimentaria clara, cuidada y fácil de entender."
              description={siteConfig.qualityText}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="raian-card flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                  <div className="raian-media relative aspect-[4/3] overflow-hidden bg-cream">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      className="raian-media-image object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl leading-tight text-ink">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted">{card.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="raian-mesh-cream py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionTitle
                eyebrow="Catálogo"
                title="Productos destacados"
                description="Referencias alimentarias con fichas preparadas para explicar usos, presentación e información relevante."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/productos"
                prefetch={false}
                className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
              >
                Ver todos los productos
              </Link>
            </Reveal>
          </div>
          <Reveal className="mt-12">
            <FeaturedProductsCarousel products={products.slice(0, 5)} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start md:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Método RAIAN</p>
              <h2 className="raian-display-balance font-display text-4xl font-medium leading-[1.05] text-ink md:text-5xl">
                Del envase a la experiencia.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                La confianza nace de un producto bien presentado, una ficha clara y contenido útil accesible en el momento
                de la compra.
              </p>
            </div>
            <div className="raian-media mt-8 overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <Image
                src="/images/brand/raian-qr-content.png"
                alt="Productos RAIAN con código QR y contenido de recetas, detalles de producto, ingredientes y atención personalizada"
                width={1536}
                height={864}
                className="raian-media-image aspect-[16/9] w-full object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
          </Reveal>
          <div className="grid gap-4 lg:self-center">
            {methodSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <article className="raian-card grid gap-5 rounded-2xl border border-line bg-sage p-6 sm:grid-cols-[3.5rem_1fr] sm:items-center">
                  <span className="grid size-14 place-items-center rounded-full bg-ink font-display text-xl font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:self-center">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="raian-mesh-ink relative isolate overflow-hidden py-20 text-white md:py-24">
        <div className="raian-grain absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center md:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-beige">Compra externa</p>
            <h2 className="raian-display-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">
              Amazon como canal, <span className="text-beige">RAIAN como marca</span>.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-beige/85 md:text-lg">
              Cuando un producto esté disponible en Amazon, el enlace se integra como una opción de compra externa. La web
              mantiene la función corporativa: explicar la marca, ordenar la información y reforzar la confianza antes del clic.
            </p>
            <Link
              href="/productos"
              prefetch={false}
              className="raian-button-glow mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:bg-beige focus:outline-none focus:ring-2 focus:ring-beige focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              Consultar disponibilidad
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-2 shadow-2xl">
              <Image
                src="/images/brand/catalogo-raian-foods-oficina.png"
                alt="Composición visual del catálogo RAIAN en un entorno corporativo"
                width={1254}
                height={1254}
                className="aspect-[4/3] w-full rounded-xl object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
