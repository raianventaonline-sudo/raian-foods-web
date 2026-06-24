import { siteConfig } from "@/data/site";

export function SupportNotice() {
  return (
    <div className="rounded-md border border-line bg-white p-6 text-center md:p-8">
      <p className="font-display text-2xl text-ink">¿Algún problema con tu producto?</p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
        Si has recibido un producto defectuoso, te falta algo en el pedido o tienes cualquier
        incidencia, escríbenos y lo resolvemos lo antes posible.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/85"
      >
        Escribir a {siteConfig.email}
      </a>
    </div>
  );
}
