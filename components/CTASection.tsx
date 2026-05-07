import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
};

export function CTASection({
  title = "Descubre el catálogo RAIAN",
  description = "Consulta productos seleccionados, fichas claras y vías de compra externas integradas de forma profesional.",
  href = "/productos",
  label = "Explorar catálogo"
}: CTASectionProps) {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-beige">RAIAN</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-beige">{description}</p>
        </div>
        <Link
          href={href}
          prefetch={false}
          className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition hover:bg-beige focus:outline-none focus:ring-2 focus:ring-beige focus:ring-offset-2 focus:ring-offset-ink"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
