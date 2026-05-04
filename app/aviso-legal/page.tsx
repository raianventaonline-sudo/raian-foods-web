import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de RAIAN Foods con datos pendientes de completar antes de publicación.",
  alternates: {
    canonical: "/aviso-legal"
  }
};

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
            description="Esta página contiene placeholders obligatorios que deben completarse con datos reales antes de publicar la web."
          />
          <div className="mt-8 space-y-6 rounded-lg border border-line bg-white p-6 text-sm leading-7 text-muted md:p-8">
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
            <p>
              El titular de esta web debe completar la información legal aplicable a RAIAN Foods, incluyendo datos de
              identificación, condiciones de uso, responsabilidades, propiedad intelectual y cualquier requisito
              adicional que corresponda.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
