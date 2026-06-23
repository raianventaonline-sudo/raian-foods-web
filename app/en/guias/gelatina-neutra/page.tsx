import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { translateText } from "@/lib/i18n";

const t = (s: string) => translateText(s, "en");

const guideTitle = "Neutral gelatine: what it is, what it is for and how to use it";
const guideDescription =
  "Guide to neutral gelatine: what it is, what 260 Bloom means, differences between bovine and porcine, how to hydrate it and its uses in desserts and recipes.";
const guidePath = "/en/guias/gelatina-neutra";

export const metadata: Metadata = {
  title: { absolute: guideTitle },
  description: guideDescription,
  alternates: {
    canonical: guidePath,
    languages: {
      es: "/guias/gelatina-neutra",
      en: guidePath,
      "x-default": "/guias/gelatina-neutra"
    }
  },
  openGraph: {
    title: `${guideTitle} | RAIAN Foods`,
    description: guideDescription,
    type: "article",
    url: guidePath,
    images: [{ url: "/images/products/gelatina-bovina-main.svg", alt: "Neutral bovine gelatine RAIAN 260 Bloom 1 kg" }],
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: `${guideTitle} | RAIAN Foods`,
    description: guideDescription,
    images: ["/images/products/gelatina-bovina-main.svg"]
  }
};

const steps = [
  {
    title: t("Hidrata"),
    text: t("Espolvorea la gelatina neutra en polvo sobre agua fría (aproximadamente 5 veces su peso en agua) y deja que absorba unos minutos hasta que se hinche.")
  },
  {
    title: t("Disuelve"),
    text: t("Calienta suavemente la mezcla o incorpórala a un líquido caliente sin que llegue a hervir, removiendo hasta que quede totalmente disuelta y transparente.")
  },
  {
    title: t("Integra"),
    text: t("Añade la gelatina disuelta al resto de la preparación cuando aún esté templada, mezclando de forma homogénea para repartirla bien.")
  },
  {
    title: t("Enfría"),
    text: t("Lleva la elaboración a frío (nevera) el tiempo que indique tu receta. La gelatina gana firmeza a medida que baja la temperatura.")
  }
];

const uses = [
  t("Mousses y espumas con cuerpo."),
  t("Panna cotta, bavarois y flanes."),
  t("Tartas frías y cheesecakes sin horno."),
  t("Gelatinas caseras de fruta o infusiones."),
  t("Glaseados espejo y coberturas brillantes."),
  t("Rellenos, cremas y preparaciones que necesitan textura.")
];

const faqs = [
  { q: t("¿La gelatina neutra tiene sabor?"), a: t("No. La gelatina neutra es incolora e insípida: gelifica y aporta textura sin alterar el sabor ni el color de la preparación, por eso sirve tanto para recetas dulces como saladas.") },
  { q: t("¿Qué significa 260 Bloom?"), a: t("El grado Bloom mide la fuerza de gelificación. Cuanto más alto, más firme queda la gelatina. 260 Bloom es un valor alto, pensado para texturas firmes y resultados de nivel profesional.") },
  { q: t("¿Qué diferencia hay entre gelatina neutra bovina y porcina?"), a: t("Técnicamente cumplen la misma función y ambas son neutras. La diferencia es el origen del colágeno. La gelatina neutra bovina de RAIAN es apta Halal; la porcina es la opción clásica para repostería. La elección depende de tus preferencias o necesidades dietéticas.") },
  { q: t("¿Cómo se hidrata la gelatina neutra en polvo?"), a: t("Espolvoréala sobre agua fría (unas 5 veces su peso en agua), deja que absorba unos minutos y luego disuélvela en un líquido caliente sin que hierva. Incorpórala templada al resto de la elaboración y enfría.") },
  { q: t("¿Cuánta gelatina neutra debo usar?"), a: t("Depende de la receta y de la firmeza que busques. Sigue siempre las cantidades indicadas en tu receta y ajústalas a tu gusto. Al ser 260 Bloom gelifica con fuerza, por lo que suele necesitarse menos cantidad que con gelatinas de menor Bloom.") },
  { q: t("¿La gelatina neutra es apta para vegetarianos o veganos?"), a: t("No. La gelatina se obtiene del colágeno animal, así que no es apta para dietas vegetarianas ni veganas. Como alternativas de origen vegetal suelen usarse el agar-agar o la pectina, aunque su comportamiento y textura no son idénticos.") },
  { q: t("¿Cómo se conserva la gelatina neutra?"), a: t("En un lugar seco, fresco y protegido de la luz, con el envase bien cerrado tras cada uso y por debajo de 30 °C. Bien conservada mantiene intacto su poder de gelificación.") }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guideTitle,
  description: guideDescription,
  image: absoluteUrl("/images/products/gelatina-bovina-main.svg"),
  inLanguage: "en-GB",
  author: { "@type": "Organization", name: "RAIAN" },
  publisher: {
    "@type": "Organization",
    name: "RAIAN",
    logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo) }
  },
  mainEntityOfPage: absoluteUrl(guidePath)
};

export default function EnGelatinaNeutraGuidePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/en" },
          { name: "Guides", href: "/en/guias" },
          { name: "Neutral gelatine", href: guidePath }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/en" },
          { label: "Guides", href: "/en/guias" },
          { label: "Neutral gelatine", href: guidePath }
        ]}
      />

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center md:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta">RAIAN Guide</p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
              Neutral gelatine: what it is, what it is for and how to use it
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              {t("La gelatina neutra es una gelatina incolora e insípida que aporta textura y consistencia a postres y preparaciones sin modificar su sabor. En esta guía te explicamos qué es, qué significa el grado 260 Bloom, las diferencias entre gelatina neutra bovina y porcina, y cómo hidratarla y usarla paso a paso.")}
            </p>
          </div>
          <div className="raian-media mx-auto w-full max-w-md overflow-hidden rounded-md border border-line bg-white p-3 shadow-sm">
            <Image
              src="/images/products/gelatina-bovina-main.svg"
              alt="Neutral bovine gelatine RAIAN 260 Bloom in 1 kg format"
              width={1000}
              height={1000}
              priority
              className="raian-media-image aspect-square w-full rounded-sm object-contain"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] md:px-8">
          <SectionTitle eyebrow={t("Qué es")} title={t("Una gelatina sin sabor ni color.")} />
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>{t("La gelatina neutra se obtiene del colágeno de origen animal y se presenta habitualmente en polvo o en hojas. Su nombre \"neutra\" viene de que no aporta sabor ni color: solo cumple su función de gelificar, dar cuerpo y fijar la textura de una elaboración.")}</p>
            <p>{t("Esto la convierte en un ingrediente muy versátil en repostería y cocina: permite cuajar mousses, montar tartas frías, preparar gelatinas caseras o conseguir glaseados brillantes manteniendo intacto el sabor original de la receta.")}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center md:px-8">
          <div className="raian-media order-last overflow-hidden rounded-md border border-line bg-white shadow-sm lg:order-first">
            <Image
              src="/images/products/gelatina%20bovina/2.jpg"
              alt="What 260 Bloom means: scale and gelling power of neutral gelatine"
              width={1200}
              height={900}
              className="raian-media-image aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
          <div>
            <SectionTitle eyebrow="260 Bloom" title={t("Qué significa el grado Bloom.")} />
            <div className="mt-6 space-y-5 text-base leading-8 text-muted">
              <p>{t("El grado Bloom es la medida que indica la fuerza o poder de gelificación de una gelatina. Cuanto más alto es el número, más firme y consistente queda el resultado.")}</p>
              <p>{t("Una gelatina neutra de 260 Bloom, como la de RAIAN, se sitúa en un valor alto: ideal cuando buscas texturas firmes, cortes limpios y un acabado profesional. Al gelificar con fuerza, normalmente necesitarás menos cantidad que con gelatinas de menor Bloom.")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow={t("Cómo se usa")}
            title={t("Cómo hidratar y usar la gelatina neutra.")}
            description={t("Cuatro pasos sencillos para incorporar la gelatina neutra en polvo a tus preparaciones.")}
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-md border border-line bg-sage p-6">
                <span className="grid size-10 place-items-center rounded-full bg-ink font-display text-lg font-medium text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl leading-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle eyebrow="Uses" title={t("Para qué sirve la gelatina neutra.")} />
            <ul className="mt-8 space-y-3">
              {uses.map((use) => (
                <li key={use} className="rounded-md border border-line bg-white px-4 py-3 text-sm leading-6 text-muted">
                  {use}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow={t("Bovina o porcina")} title={t("Qué versión elegir.")} />
            <div className="mt-8 space-y-4">
              <article className="rounded-md border border-line bg-white p-5">
                <h3 className="font-display text-2xl text-ink">{t("Gelatina neutra bovina")}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{t("De origen bovino y apta Halal. Misma neutralidad y 260 Bloom. Una buena opción cuando necesitas una gelatina sin origen porcino.")}</p>
                <Link href="/en/productos/gelatina-neutra-bovina" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-olive hover:underline">
                  {t("Ver gelatina neutra bovina")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </article>
              <article className="rounded-md border border-line bg-white p-5">
                <h3 className="font-display text-2xl text-ink">{t("Gelatina neutra porcina")}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{t("De origen porcino, la opción clásica en repostería. También neutra y de 260 Bloom para texturas firmes.")}</p>
                <Link href="/en/productos/gelatina-neutra-porcina" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-olive hover:underline">
                  {t("Ver gelatina neutra porcina")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Frequently asked questions" title={t("Dudas habituales sobre la gelatina neutra.")} />
          <div className="mt-8 divide-y divide-line rounded-md border border-line bg-white">
            {faqs.map((item) => (
              <details key={item.q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none font-display text-lg leading-snug text-ink marker:hidden">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <SectionTitle
            eyebrow="RAIAN catalogue"
            title="Ready to get started?"
            description={t("Consulta las fichas de gelatina neutra de RAIAN o descubre recetas para sacarles partido.")}
          />
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/en/productos/gelatina-neutra-bovina" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-olive">
              {t("Ver gelatina neutra")}
            </Link>
            <Link href="/en/recetas" className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:bg-beige">
              {t("Ver recetas")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
