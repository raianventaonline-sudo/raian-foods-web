import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@/app/globals.css";
import { AutoTranslator } from "@/components/AutoTranslator";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  display: "swap",
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "RAIAN Foods | Catálogo de productos alimenticios",
    template: "%s | RAIAN Foods"
  },
  description:
    "Catálogo RAIAN de productos alimenticios, recetas y contenido de apoyo para consultar antes de comprar.",
  openGraph: {
    title: "RAIAN Foods | Catálogo de productos alimenticios",
    description:
      "Productos alimenticios, recetas y contenido de apoyo reunidos en el catálogo RAIAN.",
    url: siteConfig.siteUrl,
    siteName: "RAIAN Foods",
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
  twitter: {
    card: "summary_large_image",
    title: "RAIAN Foods | Catálogo de productos alimenticios",
    description:
      "Productos alimenticios, recetas y contenido de apoyo reunidos en el catálogo RAIAN.",
    images: [siteConfig.logo]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.png?v=raian-circle",
        type: "image/png"
      }
    ],
    shortcut: "/favicon.png?v=raian-circle",
    apple: "/apple-touch-icon.png?v=raian-circle"
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
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main id="contenido" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <AutoTranslator />
      </body>
    </html>
  );
}
