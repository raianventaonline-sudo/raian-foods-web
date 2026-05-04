import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeaturedProductsCarousel } from "@/components/FeaturedProductsCarousel";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "RAIAN Foods selecciona productos alimenticios con foco en calidad, packaging, información clara y contenido útil para el consumidor en España.",
  alternates: {
    canonical: "/"
  }
};

const valueCards = [
  {
    title: "Selección cuidada",
    text: "Trabajamos referencias alimentarias con criterio y con una estructura preparada para documentar cada producto.",
    image: {
      src: "/images/value/seleccion-cuidada-real.webp",
      alt: "Ingredientes alimentarios seleccionados en tarros y cuencos sobre una mesa limpia"
    }
  },
  {
    title: "Packaging trabajado",
    text: "La presentación, el envase y la imagen de marca forman parte de la experiencia del cliente.",
    image: {
      src: "/images/value/packaging-trabajado-real.webp",
      alt: "Envases alimentarios y etiquetas preparadas para packaging"
    }
  },
  {
    title: "Información clara",
    text: "Cada ficha está preparada para incluir usos, datos técnicos, conservación, alérgenos y valores pendientes de validar.",
    image: {
      src: "/images/value/informacion-clara-real.webp",
      alt: "Ficha informativa sin texto junto a muestra de ingrediente alimentario"
    }
  },
  {
    title: "Recetas y usos prácticos",
    text: "El catálogo se acompaña de ideas de uso y contenido pensado para ayudar al consumidor final.",
    image: {
      src: "/images/value/recetas-usos-qr-raian-foods.webp",
      alt: "Productos RAIAN Foods con código QR y contenido de recetas y usos en móvil"
    }
  }
];

const trustItems = ["Producto seleccionado", "Información clara", "Compra segura en Amazon", "Atención cercana"];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", href: "/" }])} />

      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-white" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(88dvh-5rem)] w-full max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-16">
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase text-terracotta">RAIAN Foods</p>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl lg:text-7xl">
              Productos alimenticios seleccionados con cuidado, claridad y propósito.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              En RAIAN Foods trabajamos una selección de productos alimentarios pensados para el consumidor final,
              cuidando la calidad, la presentación, el packaging y la información que acompaña a cada producto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/productos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-olive px-6 text-sm font-semibold text-white transition hover:bg-[#5F6C43] focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
              >
                Ver catálogo
              </Link>
              <Link
                href="/sobre-nosotros"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
              >
                Conocer RAIAN Foods
              </Link>
            </div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/brand/hero-productos-raian-foods.png"
              alt="Productos alimenticios RAIAN Foods presentados sobre mesa"
              width={1536}
              height={1024}
              priority
              className="aspect-[4/3] w-full rounded-md object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Propuesta de valor"
            title="Un catálogo preparado para generar confianza antes de la compra."
            description={siteConfig.qualityText}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-lg border border-line bg-cream p-5">
                <h3 className="font-display text-2xl leading-tight text-ink">{card.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">{card.text}</p>
                <div className="mt-6 overflow-hidden rounded-md border border-line bg-white">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    width={760}
                    height={504}
                    className="h-32 w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-lg border border-line bg-white p-2 shadow-sm">
              <Image
                src="/images/brand/mapa-espana-ingredientes.webp"
                alt="Mapa de España formado por ingredientes típicos de distintas comunidades autónomas"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-md"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
            <div>
              <SectionTitle eyebrow="Nuestra forma de trabajar" title="Desde Valencia, con foco en producto y presentación." />
              <div className="mt-8 space-y-5 text-base leading-8 text-muted">
                <p>
                  RAIAN Foods nace como línea alimentaria de RAIAN, una empresa valenciana dedicada al comercio minorista de
                  productos alimenticios y a la selección de referencias útiles para el consumidor final.
                </p>
                <p>
                  Trabajamos con una visión completa del producto: elección de referencias, cuidado del envase, imagen de
                  marca, packaging e información clara para que cada ficha resulte fácil de entender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Catálogo"
              title="Productos destacados"
              description="Primeras referencias preparadas para ficha completa, imágenes reales y compra externa en Amazon."
            />
            <Link
              href="/productos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
            >
              Ver todos
            </Link>
          </div>
          <div className="mt-10">
            <FeaturedProductsCarousel products={products.slice(0, 5)} />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[1fr_1fr] md:items-center md:px-8">
            <PlaceholderMedia
              className="aspect-[4/3]"
              asset={{
                src: "/images/brand/recetas-usos-raian-foods.png",
                alt: "Productos RAIAN Foods con código QR y contenido de recetas, ingredientes y consejos en móvil",
                label: "Recetas y usos RAIAN Foods",
                available: true
              }}
            />
          <div>
            <SectionTitle
              eyebrow="Contenido que acompaña al producto"
              title="Más valor que el propio envase."
              description={siteConfig.contentText}
            />
            <Link
              href="/recetas"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 text-sm font-semibold text-white transition hover:bg-[#A85F3A] focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            >
              Ver ideas y recetas
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div key={item} className="rounded-lg border border-line bg-cream px-5 py-4 text-sm font-semibold text-ink">
              {item}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
