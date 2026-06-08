import type { Metadata } from "next";
import SpanishPage from "@/app/guias/page";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "RAIAN guides about food ingredients: what they are, what they are for and how to use them in your recipes.",
  alternates: {
    canonical: "/en/guias",
    languages: { es: "/guias", "x-default": "/guias" }
  }
};

export default SpanishPage;
