import type { Metadata } from "next";
import SpanishPage from "@/app/sobre-nosotros/page";

export const metadata: Metadata = {
  title: "About RAIAN",
  description:
    "RAIAN is a food brand from Valencia focused on product selection, careful presentation and clear information for the consumer.",
  alternates: {
    canonical: "/en/sobre-nosotros",
    languages: { es: "/sobre-nosotros", "x-default": "/sobre-nosotros" }
  }
};

export default SpanishPage;
