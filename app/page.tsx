import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeaturedProductsCarousel } from "@/components/FeaturedProductsCarousel";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Catálogo RAIAN",
  description:
    "Catálogo RAIAN de productos alimenticios, recetas y contenido de apoyo para consultar antes de comprar.",
  alternates: {
    canonical: "/"
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

      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/brand/hero-productos-raian-foods.png"
          alt="Composición visual de productos alimenticios RAIAN"
          fill
          priority
          className="object-cover object-[68%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,32,28,0.92)_0%,rgba(24,32,28,0.76)_42%,rgba(24,32,28,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,rgba(24,32,28,0.88)_0%,rgba(24,32,28,0.58)_46%,rgba(24,32,28,0)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(72dvh-5rem)] w-full max-w-7xl items-center px-5 py-14 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase text-beige">Catálogo RAIAN</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              Productos alimenticios seleccionados desde Valencia.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white md:text-2xl md:leading-9">
              Productos y recetas organizados para consultar rápido y comprar con confianza.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/productos"
                prefetch={false}
                className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:bg-beige focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
              >
                Explorar catálogo
              </Link>
              <Link
                href="/sobre-nosotros"
                prefetch={false}
                className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
              >
                Conocer la marca
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Qué ofrece RAIAN"
            title="Una marca alimentaria clara, cuidada y fácil de entender."
            description={siteConfig.qualityText}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card) => (
              <article key={card.title} className="raian-card flex h-full flex-col overflow-hidden rounded-md border border-line bg-white shadow-sm">
                <div className="raian-media relative aspect-[4/3] overflow-hidden bg-cream">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    className="raian-media-image object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl leading-tight text-ink">{card.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Catálogo"
              title="Productos destacados"
              description="Referencias alimentarias con fichas preparadas para explicar usos, presentación e información relevante."
            />
            <Link
              href="/productos"
              prefetch={false}
              className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
            >
              Ver todos los productos
            </Link>
          </div>
          <div className="mt-10">
            <FeaturedProductsCarousel products={products.slice(0, 5)} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start md:px-8">
          <div>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase leading-none text-terracotta">Método RAIAN</p>
              <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
                Del envase a la experiencia.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted md:text-lg">
                La confianza nace de un producto bien presentado, una ficha clara y contenido útil accesible en el momento
                de la compra.
              </p>
            </div>
            <div className="raian-media mt-6 overflow-hidden rounded-md border border-line bg-cream shadow-sm">
              <Image
                src="/images/brand/raian-qr-content.png"
                alt="Productos RAIAN con código QR y contenido de recetas, detalles de producto, ingredientes y atención personalizada"
                width={1536}
                height={864}
                className="raian-media-image aspect-[16/9] w-full object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
          </div>
          <div className="grid gap-4 lg:self-center">
            {methodSteps.map((step, index) => (
              <article key={step.title} className="raian-card grid gap-4 rounded-md border border-line bg-sage p-5 sm:grid-cols-[3rem_1fr] sm:items-center">
                <span className="grid size-12 place-items-center rounded-full bg-ink text-sm font-bold text-white sm:self-center">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center md:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-beige">Compra externa</p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">Amazon como canal, RAIAN como marca.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-beige">
              Cuando un producto esté disponible en Amazon, el enlace se integra como una opción de compra externa. La web
              mantiene la función corporativa: explicar la marca, ordenar la información y reforzar la confianza antes del clic.
            </p>
            <Link
              href="/productos"
              prefetch={false}
              className="raian-button-glow mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:bg-beige focus:outline-none focus:ring-2 focus:ring-beige focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              Consultar disponibilidad
            </Link>
          </div>
          <div className="overflow-hidden rounded-md border border-white/15 bg-white/[0.08] p-2">
            <Image
              src="/images/brand/catalogo-raian-foods-oficina.png"
              alt="Composición visual del catálogo RAIAN en un entorno corporativo"
              width={1254}
              height={1254}
              className="aspect-[4/3] w-full rounded-sm object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
