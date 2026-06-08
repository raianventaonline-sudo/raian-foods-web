import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Información legal de RAIAN pendiente de completar con los datos oficiales del titular.",
  alternates: {
    canonical: "/aviso-legal",
    languages: { en: "/en/aviso-legal", "x-default": "/aviso-legal" }
  }
};

const ownerFields = ["Razón social", "CIF/NIF", "Domicilio social", "Condiciones de uso", "Propiedad intelectual"];

export default function LegalNoticePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Aviso legal", href: "/aviso-legal" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Aviso legal", href: "/aviso-legal" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Información legal"
            title="Aviso legal"
            description="Este apartado debe completarse con los datos oficiales del titular antes de publicar la web."
          />
          <div className="mt-8 space-y-6 rounded-md border border-line bg-white p-6 text-sm leading-7 text-muted md:p-8">
            <p>
              <strong className="text-ink">Razón social:</strong> {siteConfig.legal.businessName}
            </p>
            <p>
              <strong className="text-ink">CIF/NIF:</strong> {siteConfig.legal.taxId}
            </p>
            <p>
              <strong className="text-ink">Domicilio social:</strong> {siteConfig.legal.address}
            </p>
            <p>
              <strong className="text-ink">Email de contacto:</strong> {siteConfig.legal.contactEmail}
            </p>
          </div>

          <div className="mt-6 rounded-md border border-terracotta/30 bg-white p-6">
            <h2 className="text-lg font-bold text-ink">Información que necesito del propietario</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2">
              {ownerFields.map((field) => (
                <li key={field} className="rounded-md bg-cream px-4 py-3">
                  {field}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
