import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SectionTitle } from "@/components/SectionTitle";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre RAIAN Foods",
  description:
    "RAIAN Foods es una línea alimentaria de RAIAN enfocada en selección de producto, presentación, packaging e información clara desde Valencia.",
  alternates: {
    canonical: "/sobre-nosotros"
  }
};

const pillars = [
  {
    title: "Desde Valencia",
    text: "RAIAN Foods trabaja desde Valencia con una visión cercana al consumidor final y al mercado español.",
    image: {
      src: "/images/about/desde-valencia-real.webp",
      alt: "Ingredientes mediterráneos sobre una mesa con inspiración valenciana"
    }
  },
  {
    title: "Selección de producto",
    text: "Buscamos referencias alimentarias útiles, claras y preparadas para integrarse en un catálogo cuidado.",
    image: {
      src: "/images/about/seleccion-producto-real.webp",
      alt: "Ingredientes alimentarios seleccionados en tarros y cuencos"
    }
  },
  {
    title: "Packaging e imagen",
    text: "El envase y la presentación forman parte de la confianza que queremos transmitir en cada producto.",
    image: {
      src: "/images/about/packaging-imagen-real.webp",
      alt: "Envases alimentarios y etiquetas sin texto preparados para packaging"
    }
  },
  {
    title: "Contenido útil para el consumidor",
    text: "Creamos fichas, usos prácticos, consejos y recetas para que cada referencia sea más fácil de entender.",
    image: {
      src: "/images/about/contenido-consumidor-real.webp",
      alt: "Receta con gelatina, ingredientes y cuaderno de notas sin texto"
    }
  }
];

const photoPlaceholders = [
  {
    label: "Instalaciones",
    text: "Instalaciones RAIAN Foods preparadas para trabajo alimentario.",
    src: "/images/about/instalaciones-raian-foods.png",
    available: true
  },
  {
    label: "Preparación",
    text: "Preparación y envasado de producto RAIAN Foods en línea de trabajo.",
    src: "/images/about/preparacion-raian-foods.png",
    available: true
  },
  {
    label: "Packaging",
    text: "Diseño y revisión de packaging RAIAN Foods antes de su presentación final.",
    src: "/images/about/packaging-raian-foods.png",
    available: true
  },
  {
    label: "Equipo",
    text: "Equipo RAIAN Foods en entorno de preparación y control de producto.",
    src: "/images/about/equipo-raian-foods.png",
    available: true
  }
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Sobre RAIAN Foods", href: "/sobre-nosotros" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Sobre RAIAN Foods", href: "/sobre-nosotros" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.9fr] md:items-center md:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-terracotta">Sobre RAIAN Foods</p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
              RAIAN Foods: selección, presentación y claridad para el consumidor final.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              RAIAN Foods nace dentro de RAIAN con el objetivo de trabajar productos alimenticios seleccionados con
              criterio, cuidando tanto la calidad del producto como la experiencia completa del cliente. Desde Valencia,
              buscamos referencias útiles para el consumidor final, prestando atención al envase, la imagen de marca, el
              packaging y la información que acompaña a cada producto.
            </p>
          </div>
          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/about/productos-raian-foods-catalogo.png"
              alt="Productos alimenticios RAIAN Foods en formato catálogo"
              width={1536}
              height={1024}
              priority
              className="aspect-[4/3] w-full rounded-md object-cover"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-4 md:px-8">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="flex h-full flex-col rounded-lg border border-line bg-cream p-5">
              <h2 className="font-display text-2xl leading-tight text-ink">{pillar.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">{pillar.text}</p>
              <div className="mt-6 overflow-hidden rounded-md border border-line bg-white">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  width={760}
                  height={504}
                  className="h-32 w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Fotos reales pendientes"
            title="Espacios preparados para mostrar instalaciones, producto y equipo."
            description="Estos bloques pueden sustituirse por fotografías reales cuando estén disponibles."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photoPlaceholders.map((photo) => (
              <article key={photo.label} className="overflow-hidden rounded-lg border border-line bg-white">
                <PlaceholderMedia
                  className="aspect-[4/3] rounded-none border-0"
                  asset={{
                    src: photo.src,
                    alt: photo.text,
                    label: photo.label,
                    available: photo.available
                  }}
                />
                <p className="p-4 text-sm leading-7 text-muted">{photo.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
