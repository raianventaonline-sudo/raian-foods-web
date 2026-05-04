import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con RAIAN Foods para consultas sobre productos, colaboraciones o información comercial.",
  alternates: {
    canonical: "/contacto"
  }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Contacto", href: "/contacto" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Contacto", href: "/contacto" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] md:px-8">
          <div>
            <SectionTitle
              eyebrow="Contacto"
              title="Consultas sobre productos, colaboraciones o información comercial."
              description="Para consultas sobre productos, colaboraciones o información comercial, puedes contactar con RAIAN Foods mediante este formulario."
            />
            <div className="mt-8 rounded-lg border border-line bg-white p-5 text-sm leading-7 text-muted">
              <p>
                <strong className="text-ink">Email:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-olive">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <strong className="text-ink">Ubicación:</strong> {siteConfig.location}
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-line bg-white p-2 shadow-sm">
              <Image
                src="/images/brand/oficinas-raian-foods.png"
                alt="Oficinas de RAIAN Foods"
                width={1254}
                height={1254}
                className="aspect-[4/3] w-full rounded-md object-cover"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
