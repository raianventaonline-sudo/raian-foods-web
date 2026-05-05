import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de RAIAN pendiente de completar con los datos legales oficiales.",
  alternates: {
    canonical: "/privacidad"
  }
};

const rights = [
  "Acceso",
  "Rectificación",
  "Supresión",
  "Oposición",
  "Limitación",
  "Portabilidad",
  "No ser objeto de decisiones automatizadas"
];

const missingPrivacyFields = [
  "Responsable del tratamiento",
  "Plazo de conservación",
  "Destinatarios o encargados",
  "Canal para ejercer derechos"
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Privacidad", href: "/privacidad" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Privacidad", href: "/privacidad" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Protección de datos"
            title="Política de privacidad"
            description="Este texto cubre la base informativa del contacto web, pero debe revisarse legalmente antes de publicar."
          />
          <div className="mt-8 space-y-7 rounded-md border border-line bg-white p-6 text-sm leading-7 text-muted md:p-8">
            <section>
              <h2 className="text-lg font-bold text-ink">Responsable del tratamiento</h2>
              <p className="mt-3">{siteConfig.legal.controller}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Datos tratados</h2>
              <p className="mt-3">
                Los datos recogidos mediante el formulario de contacto pueden incluir nombre, email, asunto y mensaje.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Finalidad</h2>
              <p className="mt-3">Responder consultas recibidas sobre productos, colaboraciones o información comercial.</p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Base legitimadora</h2>
              <p className="mt-3">Consentimiento del usuario mediante el envío voluntario de la consulta.</p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Conservación de datos</h2>
              <p className="mt-3">{siteConfig.legal.retention}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Destinatarios</h2>
              <p className="mt-3">{siteConfig.legal.recipients}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Derechos</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {rights.map((right) => (
                  <li key={right} className="rounded-md bg-cream px-4 py-3">
                    {right}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-6 rounded-md border border-terracotta/30 bg-white p-6">
            <h2 className="text-lg font-bold text-ink">Información que necesito del propietario</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2">
              {missingPrivacyFields.map((field) => (
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
