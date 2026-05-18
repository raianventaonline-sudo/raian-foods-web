"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/data/products";

type ProductSearchProps = {
  products: Product[];
};

const normalizeSearch = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export function ProductSearch({ products }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearch(query);

  const filteredProducts = useMemo(() => {
    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) => {
      const searchableText = normalizeSearch(
        [
          product.name,
          product.shortDescription,
          product.description,
          product.category,
          ...product.tags,
          ...product.uses
        ].join(" ")
      );

      return searchableText.includes(normalizedQuery);
    });
  }, [normalizedQuery, products]);

  return (
    <div>
      <div className="mb-8 rounded-md border border-line bg-sage p-4 md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl flex-1">
            <label htmlFor="product-search" className="block text-sm font-semibold text-ink">
              Buscar en el catálogo
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej. gelatina, almendra, dextrosa..."
              className="mt-2 min-h-12 w-full rounded-full border border-line bg-white px-5 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-olive focus:ring-2 focus:ring-olive/20"
            />
          </div>
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-ink transition hover:border-terracotta hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            >
              Limpiar búsqueda
            </button>
          ) : null}
        </div>
        <p className="mt-3 text-sm text-muted" aria-live="polite">
          {filteredProducts.length === 1
            ? "1 producto encontrado"
            : `${filteredProducts.length} productos encontrados`}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-line bg-cream p-8 text-center">
          <h2 className="font-display text-3xl leading-tight text-ink">No hemos encontrado ese producto</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Prueba con otra palabra, categoría o ingrediente. También puedes contactar con RAIAN para consultar referencias
            o información comercial.
          </p>
        </div>
      )}
    </div>
  );
}
