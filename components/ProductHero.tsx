import type { Product } from "@/data/products";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type ProductHeroProps = {
  product: Product;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="bg-cream py-10 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-8">
        <PlaceholderMedia asset={product.mainImage} className="aspect-[4/3] md:aspect-[5/4]" priority />
        <div>
          <p className="text-sm font-semibold uppercase text-terracotta">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink md:text-6xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{product.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-white px-3 py-1 text-sm text-muted">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8">
            {product.amazonUrl ? (
              <a
                href={product.amazonUrl}
                target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 text-sm font-semibold text-white transition hover:bg-[#A85F3A] focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            >
                Ver disponibilidad en Amazon
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-full bg-beige px-6 text-sm font-semibold text-muted"
              >
                Disponible próximamente
              </button>
            )}
            <p className="mt-3 max-w-md text-xs leading-6 text-muted">
              La compra, cuando esté activa, se realiza fuera de esta web a través del canal indicado. RAIAN mantiene aquí
              la información de marca y producto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
