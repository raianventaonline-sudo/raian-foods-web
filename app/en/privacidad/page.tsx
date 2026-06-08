import type { Metadata } from "next";
import SpanishPage from "@/app/privacidad/page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for RAIAN Foods.",
  alternates: {
    canonical: "/en/privacidad",
    languages: { es: "/privacidad", "x-default": "/privacidad" }
  }
};

export default SpanishPage;
