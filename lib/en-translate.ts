/**
 * Server-side helpers for rendering English versions of products and guides.
 * Uses the existing translateText function (runs fine in Server Components —
 * it does only dictionary lookups, no browser APIs).
 */
import { translateText } from "./i18n";
import type { Product } from "@/data/products";
import type { Guide } from "@/data/guides";

/** Return a copy of the product with all translatable fields in English. */
export function translateProductToEn(product: Product): Product {
  return {
    ...product,
    name: translateText(product.name, "en"),
    shortDescription: translateText(product.shortDescription, "en"),
    description: translateText(product.description, "en"),
    uses: product.uses.map((u) => translateText(u, "en")),
    howToUse: product.howToUse.map((s) => translateText(s, "en")),
    allergens: translateText(product.allergens, "en"),
    conservation: translateText(product.conservation, "en"),
    seoTitle: product.seoTitle ? translateText(product.seoTitle, "en") : undefined,
    seoDescription: product.seoDescription ? translateText(product.seoDescription, "en") : undefined,
    faqs: product.faqs?.map((f) => ({
      question: translateText(f.question, "en"),
      answer: translateText(f.answer, "en")
    }))
  };
}

/** Return a copy of the guide with all fields in English. */
export function translateGuideToEn(guide: Guide): Guide {
  return {
    ...guide,
    title: translateText(guide.title, "en"),
    metaTitle: translateText(guide.metaTitle, "en"),
    description: translateText(guide.description, "en"),
    intro: translateText(guide.intro, "en"),
    sections: guide.sections.map((s) => ({
      heading: translateText(s.heading, "en"),
      paragraphs: s.paragraphs.map((p) => translateText(p, "en"))
    })),
    faqs: guide.faqs.map((f) => ({
      question: translateText(f.question, "en"),
      answer: translateText(f.answer, "en")
    }))
  };
}
