export const siteConfig = {
  name: "RAIAN",
  brand: "RAIAN",
  domain: "foods.raian.es",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://foods.raian.es",
  email: "ventas@raian.es",
  logo: "/images/brand/raian-foods-logo.png",
  location: "Valencia, España",
  shortBrandText:
    "RAIAN es una marca valenciana de productos alimenticios seleccionados, con una presentación cuidada e información clara para comprar con confianza.",
  qualityText:
    "Cuidamos la selección, el envase, la ficha de producto y los contenidos de apoyo para que cada referencia resulte fácil de entender antes de comprar.",
  contentText:
    "Acompañamos el producto con usos, consejos y contenido práctico para que el cliente sepa cómo utilizarlo con criterio en su día a día.",
  amazonText:
    "Cuando una referencia esté disponible en Amazon, el enlace se mostrará como una vía externa de compra clara y no intrusiva.",
  legal: {
    businessName: "[PENDIENTE]",
    taxId: "[PENDIENTE]",
    address: "[PENDIENTE]",
    contactEmail: "ventas@raian.es",
    controller: "[PENDIENTE]",
    retention: "[PENDIENTE]",
    recipients: "[PENDIENTE]"
  }
} as const;

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Usos y recetas", href: "/recetas" },
  { label: "Sobre RAIAN", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" }
] as const;
