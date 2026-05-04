import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
};

export function CTASection({
  title = "Explora nuestros productos alimentarios",
  description = "Consulta el catálogo de RAIAN Foods y accede a fichas preparadas para completar información técnica, usos, recetas y enlaces de compra.",
  href = "/productos",
  label = "Ver catálogo"
}: CTASectionProps) {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-beige">RAIAN Foods</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-beige">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 text-sm font-semibold text-white transition hover:bg-[#A85F3A] focus:outline-none focus:ring-2 focus:ring-beige focus:ring-offset-2 focus:ring-offset-ink"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
