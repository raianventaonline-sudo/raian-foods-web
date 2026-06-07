import type { MetadataRoute } from "next";
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

  return entries;
}
