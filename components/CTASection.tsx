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
    <section className="raian-mesh-ink relative isolate overflow-hidden py-20 text-white md:py-24">
      <div className="raian-grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-beige">RAIAN</p>
          <h2 className="raian-display-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-beige/85 md:text-lg">{description}</p>
        </div>
        <Link
          href={href}
          prefetch={false}
          className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-ink transition hover:bg-beige focus:outline-none focus:ring-2 focus:ring-beige focus:ring-offset-2 focus:ring-offset-ink"
        >
          {label}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-1.5" aria-hidden>
            <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
