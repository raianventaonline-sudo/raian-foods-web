import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { products } from "@/data/products";
import { recipes } from "@/data/recipes";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.siteUrl}/productos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteConfig.siteUrl}/recetas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteConfig.siteUrl}/guias`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteConfig.siteUrl}/guias/gelatina-neutra`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  for (const guide of guides) {
    entries.push({
      url: `${siteConfig.siteUrl}/guias/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    });
  }

  for (const product of products) {
    entries.push({
      url: `${siteConfig.siteUrl}/productos/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    });
  }

  for (const recipe of recipes) {
    entries.push({
      url: `${siteConfig.siteUrl}/recetas/${recipe.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    });
  }

  for (const route of ["/sobre-nosotros", "/contacto"]) {
    entries.push({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    });
  }

  for (const route of ["/aviso-legal", "/privacidad", "/cookies"]) {
    entries.push({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    });
  }

  // ── English versions (/en/...) ──────────────────────────────────────────
  const en = (path: string) => `${siteConfig.siteUrl}/en${path}`;

  entries.push(
    { url: en(""), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: en("/productos"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: en("/recetas"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: en("/guias"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: en("/guias/gelatina-neutra"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: en("/sobre-nosotros"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: en("/contacto"), lastModified: now, changeFrequency: "monthly", priority: 0.6 }
  );

  for (const guide of guides) {
    entries.push({ url: en(`/guias/${guide.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }

  for (const product of products) {
    entries.push({ url: en(`/productos/${product.slug}`), lastModified: now, changeFrequency: "weekly", priority: 0.8 });
  }

  for (const recipe of recipes) {
    entries.push({ url: en(`/recetas/${recipe.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }

  return entries;
}
