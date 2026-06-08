import type { Metadata } from "next";
import SpanishHome from "@/app/page";

export const metadata: Metadata = {
  title: { absolute: "RAIAN Foods | Food ingredients catalogue" },
  description:
    "Browse the RAIAN catalogue of selected food ingredients, recipes and supporting content to consult before buying.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", "x-default": "/" }
  },
  openGraph: {
    title: "RAIAN Foods | Food ingredients catalogue",
    description: "Browse the RAIAN catalogue of selected food ingredients, recipes and supporting content.",
    locale: "en_GB"
  }
};

export default SpanishHome;
