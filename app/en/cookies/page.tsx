import type { Metadata } from "next";
import SpanishPage from "@/app/cookies/page";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Cookie policy for RAIAN Foods.",
  alternates: {
    canonical: "/en/cookies",
    languages: { es: "/cookies", "x-default": "/cookies" }
  }
};

export default SpanishPage;
