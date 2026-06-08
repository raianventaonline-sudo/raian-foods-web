import type { Metadata } from "next";
import SpanishPage from "@/app/recetas/page";

export const metadata: Metadata = {
  title: "Uses & recipes",
  description:
    "RAIAN recipes to make at home, organised by type, dietary needs and catalogue products.",
  alternates: {
    canonical: "/en/recetas",
    languages: { es: "/recetas", "x-default": "/recetas" }
  }
};

export default SpanishPage;
