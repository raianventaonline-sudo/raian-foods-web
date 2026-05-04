import Link from "next/link";
import type { Product } from "@/data/products";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-subtle">
      <Link href={`/productos/${product.slug}`} aria-label={`Ver ${product.name}`} className="block">
        <PlaceholderMedia asset={product.mainImage} className="aspect-[4/3] rounded-none border-0" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-olive">{product.category}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{product.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/productos/${product.slug}`}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
          >
            Ver producto
          </Link>
          {product.amazonUrl ? (
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-terracotta hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            >
              Comprar en Amazon
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
