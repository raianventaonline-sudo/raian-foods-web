import type { Product } from "@/data/products";
import { siteConfig } from "@/data/site";

export const absoluteUrl = (path = "") => new URL(path, siteConfig.siteUrl).toString();

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RAIAN",
  alternateName: "RAIAN Foods",
  url: siteConfig.siteUrl,
  logo: absoluteUrl(siteConfig.logo),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valencia",
    addressCountry: "ES"
  }
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RAIAN",
  alternateName: "RAIAN Foods",
  url: siteConfig.siteUrl,
  inLanguage: "es-ES",
  publisher: {
    "@type": "Organization",
    name: "RAIAN"
  }
};

export const productJsonLd = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${product.name} - RAIAN`,
  url: absoluteUrl(`/productos/${product.slug}`),
  brand: {
    "@type": "Brand",
    name: "RAIAN"
  },
  category: product.category,
  description: product.shortDescription,
  image: product.mainImage.available ? absoluteUrl(product.mainImage.src) : undefined,
  sku: product.amazonUrl ? product.amazonAsin : undefined
});

export const itemListJsonLd = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.url)
  }))
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
