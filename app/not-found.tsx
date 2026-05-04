import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-sm font-semibold uppercase text-terracotta">RAIAN Foods</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink md:text-6xl">Página no encontrada</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          La página que buscas no existe o está pendiente de publicar dentro del catálogo.
        </p>
        <Link
          href="/productos"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-olive px-6 text-sm font-semibold text-white transition hover:bg-[#5F6C43] focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
        >
          Ver productos
        </Link>
      </div>
    </section>
  );
}
