import type { Product } from "@/data/products";
import { siteConfig } from "@/data/site";

export const absoluteUrl = (path = "") => new URL(path, siteConfig.siteUrl).toString();

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RAIAN",
  url: siteConfig.siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valencia",
    addressCountry: "ES"
  }
};

export const productJsonLd = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${product.name} - RAIAN`,
  brand: {
    "@type": "Brand",
    name: "RAIAN"
  },
  category: product.category,
  description: product.shortDescription,
  image: product.mainImage.available ? absoluteUrl(product.mainImage.src) : undefined,
  sku: undefined
});

export const breadcrumbJsonLd = (items: Array<{ name: string; href: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.href)
  }))
});
