import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "RAIAN Foods | Catálogo alimentario",
    template: "%s | RAIAN Foods"
  },
  description:
    "Catálogo corporativo de RAIAN Foods: productos alimenticios seleccionados, información clara, recetas y compra externa en Amazon.",
  openGraph: {
    title: "RAIAN Foods | Catálogo alimentario",
    description:
      "Productos alimenticios seleccionados con cuidado, claridad y una presentación preparada para el consumidor final.",
    url: siteConfig.siteUrl,
    siteName: "RAIAN Foods",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: siteConfig.logo,
        width: 1600,
        height: 1600,
        alt: "Logotipo de RAIAN Foods"
      }
    ]
  },
  icons: {
    icon: siteConfig.logo
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF7F0"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main id="contenido" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
