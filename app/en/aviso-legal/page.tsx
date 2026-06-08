import type { Metadata } from "next";
import SpanishPage from "@/app/aviso-legal/page";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Legal notice and business information for RAIAN Foods.",
  alternates: {
    canonical: "/en/aviso-legal",
    languages: { es: "/aviso-legal", "x-default": "/aviso-legal" }
  }
};

export default SpanishPage;
