import type { Metadata } from "next";
import SpanishPage from "@/app/contacto/page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RAIAN for enquiries about food products, commercial information or brand collaboration.",
  alternates: {
    canonical: "/en/contacto",
    languages: { es: "/contacto", "x-default": "/contacto" }
  }
};

export default SpanishPage;
