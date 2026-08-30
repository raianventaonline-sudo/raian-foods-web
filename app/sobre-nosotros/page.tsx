import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductProcessVideo } from "@/components/ProductProcessVideo";
import { SectionTitle } from "@/components/SectionTitle";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre RAIAN",
  description:
    "RAIAN es una marca alimentaria valenciana enfocada en selección de producto, presentación cuidada e información clara para el consumidor.",
  alternates: {
    canonical: "/sobre-nosotros",
    languages: { en: "/en/sobre-nosotros", "x-default": "/sobre-nosotros" }
  }
};

const pillars = [
  {
    title: "Origen valenciano",
    text: "Trabajamos desde Valencia con una visión cercana al consumidor español y a sus hábitos de compra.",
    image: {
      src: "/images/about/desde-valencia-real.webp",
      alt: "Ingredientes mediterráneos sobre una mesa con inspiración valenciana"
    }
  },
  {
    title: "Selección con criterio",
    text: "El catálogo se construye con referencias alimentarias útiles, comprensibles y fáciles de presentar.",
    image: {
      src: "/images/about/seleccion-producto-real.webp",
      alt: "Ingredientes alimentarios seleccionados en tarros y cuencos"
    }
  },
  {
    title: "Imagen coherente",
    text: "La presentación del envase y la identidad visual ayudan a que la marca resulte ordenada y reconocible.",
    image: {
      src: "/images/about/packaging-imagen-real.webp",
      alt: "Envases alimentarios y etiquetas preparadas para packaging"
    }
  },
  {
    title: "Información útil",
    text: "Cada ficha debe ayudar a entender el producto: qué es, para qué se usa y qué datos conviene revisar.",
    image: {
      src: "/images/about/contenido-consumidor-real.webp",
      alt: "Receta con ingredientes y cuaderno de notas"
    }
  }
];

const principles = [
  "Claridad antes que exceso de información.",
  "Presentación cuidada sin promesas exageradas.",
  "Compra externa integrada de forma natural.",
  "Datos técnicos validados antes de publicarse como definitivos."
];

const brandScenes = [
  {
    title: "Instalaciones",
    text: "Instalaciones RAIAN preparadas para trabajo alimentario.",
    image: {
      src: "/images/about/instalaciones-raian-foods.png",
      alt: "Instalaciones RAIAN para trabajo alimentario"
    }
  },
  {
    title: "Preparación",
    text: "Preparación y envasado de producto RAIAN en línea de trabajo.",
    image: {
      src: "/images/about/preparacion-raian-foods.png",
      alt: "Preparación y envasado de producto RAIAN"
    }
  },
  {
    title: "Packaging",
    text: "Diseño y revisión de packaging RAIAN antes de su presentación final.",
    image: {
      src: "/images/about/packaging-raian-foods.png",
      alt: "Diseño y revisión de packaging RAIAN"
    }
  },
  {
    title: "Equipo",
    text: "Equipo RAIAN en entorno de preparación y control de producto.",
    image: {
      src: "/images/about/equipo-raian-foods.png",
      alt: "Equipo RAIAN en entorno de preparación y control de producto"
    }
  }
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Sobre RAIAN", href: "/sobre-nosotros" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Sobre RAIAN", href: "/sobre-nosotros" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.9fr] md:items-center md:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-terracotta">Sobre RAIAN</p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
              Una marca alimentaria valenciana con foco en producto, claridad y presentación.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              RAIAN trabaja productos alimenticios seleccionados con una idea sencilla: que el cliente entienda qué compra,
              perciba una marca cuidada y encuentre la información esencial sin fricción. La web acompaña esa experiencia
              con un catálogo claro, fichas ordenadas y contacto visible.
            </p>
          </div>
          <div className="raian-media mx-auto w-full max-w-xl overflow-hidden rounded-md border border-line bg-white p-2 shadow-sm">
            <Image
              src="/images/about/productos-raian-foods-catalogo.png"
              alt="Composición visual de productos alimenticios RAIAN en formato catálogo"
              width={1536}
              height={1024}
              priority
              className="raian-media-image aspect-[4/3] w-full rounded-sm object-cover"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-4 md:px-8">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="raian-card flex h-full flex-col overflow-hidden rounded-md border border-line bg-white shadow-sm">
              <div className="raian-media relative aspect-[4/3] bg-cream">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  fill
                  className="raian-media-image object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-2xl leading-tight text-ink">{pillar.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start md:px-8">
          <SectionTitle
            eyebrow="Criterios de marca"
            title="La confianza se construye en los detalles."
            description="RAIAN debe percibirse como una marca sobria, accesible y bien organizada. Por eso cada bloque de contenido tiene una función concreta."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <li key={item} className="raian-card rounded-md border border-line bg-white px-5 py-4 text-sm font-semibold leading-6 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Entorno RAIAN"
            title="Espacios, producto y equipo con una presentación cuidada."
            description="Un vistazo visual a los ámbitos que construyen la percepción de marca: instalaciones, preparación, packaging y equipo."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandScenes.map((scene) => (
              <article key={scene.title} className="raian-card overflow-hidden rounded-md border border-line bg-white shadow-sm">
                <div className="raian-media relative aspect-[4/3] bg-cream">
                  <Image
                    src={scene.image.src}
                    alt={scene.image.alt}
                    fill
                    className="raian-media-image object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-semibold leading-tight text-ink">{scene.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{scene.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="rounded-md border border-line bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              <div className="shrink-0">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-md border-4 border-olive text-center">
                  <span className="text-[11px] font-extrabold uppercase leading-tight tracking-widest text-olive">ES</span>
                  <span className="text-[8px] font-bold text-olive">·</span>
                  <span className="text-[11px] font-extrabold uppercase leading-tight tracking-widest text-olive">CE</span>
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase text-terracotta">Seguridad alimentaria</p>
                <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
                  Empresa con Registro Sanitario oficial.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                  RAIAN dispone de Registro Sanitario de Empresa expedido por las autoridades competentes españolas y reconocido en toda la Unión Europea. Este registro acredita que nuestra actividad de comercialización de productos alimentarios cumple con la normativa sanitaria vigente.
                </p>
                <div className="mt-6 inline-flex flex-col gap-1 rounded-md border border-line bg-cream px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">Nº de registro</span>
                  <span className="font-display text-xl font-bold text-ink">ES 40.098583/V CE</span>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Emitido por el Registro General Sanitario de Empresas Alimentarias y Alimentos (RGSEAA) de España.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductProcessVideo />
    </>
  );
}
