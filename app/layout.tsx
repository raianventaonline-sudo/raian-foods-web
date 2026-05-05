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
    default: "RAIAN | Productos alimenticios seleccionados desde Valencia",
    template: "%s | RAIAN"
  },
  description:
    "RAIAN es una marca valenciana de productos alimenticios seleccionados, con fichas claras, presentación cuidada y compra externa en Amazon cuando procede.",
  openGraph: {
    title: "RAIAN | Productos alimenticios seleccionados",
    description:
      "Marca alimentaria valenciana con productos seleccionados, información clara y una presentación cuidada.",
    url: siteConfig.siteUrl,
    siteName: "RAIAN",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: siteConfig.logo,
        width: 1600,
        height: 1600,
        alt: "Logotipo de RAIAN"
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
      <body className="font-sans">
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
