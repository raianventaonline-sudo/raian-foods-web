export const siteConfig = {
  name: "RAIAN Foods",
  brand: "RAIAN",
  domain: "foods.raian.es",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://foods.raian.es",
  email: "ventas@raian.es",
  logo: "/images/brand/raian-foods-logo.png",
  location: "Valencia, España",
  shortBrandText:
    "RAIAN Foods selecciona productos alimenticios pensando en el consumidor final: productos claros, bien presentados y acompañados de información útil para su uso diario.",
  qualityText:
    "Cuidamos cada detalle: desde la selección del producto hasta el envase, la presentación y el contenido adicional que ayuda al cliente a entender mejor lo que consume.",
  contentText:
    "Queremos que cada producto tenga más valor que el propio envase. Por eso preparamos recetas, consejos y usos prácticos para que el cliente pueda aprovecharlo con claridad y confianza.",
  amazonText:
    "Puedes comprar este producto directamente en Amazon. El botón te redirigirá al listing correspondiente.",
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
  { label: "Recetas", href: "/recetas" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" }
] as const;
