import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de RAIAN Foods preparada para formulario de contacto y datos pendientes de completar.",
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
            description="Texto base preparado para el formulario de contacto. Debe ser revisado y completado con datos legales reales."
          />
          <div className="mt-8 space-y-7 rounded-lg border border-line bg-white p-6 text-sm leading-7 text-muted md:p-8">
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
              <p className="mt-3">Consentimiento del usuario mediante el envío voluntario del formulario.</p>
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
              <p className="mt-3">
                El usuario podrá ejercer sus derechos mediante los canales que se indiquen cuando se complete esta
                política.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {rights.map((right) => (
                  <li key={right} className="rounded-lg bg-cream px-4 py-3">
                    {right}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
