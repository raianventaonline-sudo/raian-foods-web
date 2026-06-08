import type { Metadata } from "next";
import SpanishPage from "@/app/productos/page";

export const metadata: Metadata = {
  title: "Product catalogue",
  description:
    "Browse the RAIAN catalogue of selected food ingredients: gelatines, almond flour and more, with clear information and careful presentation.",
  alternates: {
    canonical: "/en/productos",
    languages: { es: "/productos", "x-default": "/productos" }
  }
};

export default SpanishPage;
