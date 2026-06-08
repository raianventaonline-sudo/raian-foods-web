import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de RAIAN con cookies técnicas y opción de consentimiento para analítica si se activa en el futuro.",
  alternates: {
    canonical: "/cookies",
    languages: { en: "/en/cookies", "x-default": "/cookies" }
  }
};

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Cookies", href: "/cookies" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Cookies", href: "/cookies" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Preferencias"
            title="Política de cookies"
            description="Información sobre el uso de cookies técnicas y la posible activación futura de cookies analíticas con consentimiento."
          />
          <div className="mt-8 space-y-7 rounded-lg border border-line bg-white p-6 text-sm leading-7 text-muted md:p-8">
            <section>
              <h2 className="text-lg font-bold text-ink">Cookies técnicas</h2>
              <p className="mt-3">
                Son necesarias para el funcionamiento básico de la web y no requieren consentimiento cuando se usan
                exclusivamente para prestar el servicio solicitado por el usuario.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Cookies analíticas</h2>
              <p className="mt-3">
                Solo se activarán si RAIAN decide incorporar una herramienta analítica y obtiene el consentimiento
                correspondiente mediante banner o panel de configuración.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-ink">Panel de cookies</h2>
              <p className="mt-3">
                La web incluye un banner con opciones para aceptar, rechazar o configurar cookies.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
