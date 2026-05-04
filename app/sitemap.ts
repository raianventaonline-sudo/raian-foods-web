import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/productos", "/recetas", "/sobre-nosotros", "/contacto", "/aviso-legal", "/privacidad", "/cookies"];
  const productRoutes = products.map((product) => `/productos/${product.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));
}
