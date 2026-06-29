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
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

export function ProductSearch({ products }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const normalizedQuery = normalizeSearch(query);

  const availableFilters = useMemo(() => {
    const set = new Set<string>();
    products.forEach((product) => product.dietFilters?.forEach((filter) => set.add(filter)));
    return Array.from(set);
  }, [products]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((f) => f !== filter) : [...current, filter]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (activeFilters.length > 0) {
        const productFilters = product.dietFilters ?? [];
        const matchesAllFilters = activeFilters.every((filter) => productFilters.includes(filter));
        if (!matchesAllFilters) return false;
      }

      if (!normalizedQuery) return true;

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
  }, [normalizedQuery, activeFilters, products]);

  return (
    <div>
      <div className="mb-8 rounded-md border border-line bg-sage p-4 md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm md:flex-1">
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
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-2 inline-flex min-h-9 items-center justify-center rounded-full border border-line bg-white px-4 text-xs font-semibold text-ink transition hover:border-terracotta hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
              >
                Limpiar búsqueda
              </button>
            ) : null}
          </div>

          {availableFilters.length > 0 ? (
            <div className="md:flex-1 md:border-l md:border-line md:pl-6">
              <p className="block text-sm font-semibold text-ink">Filtrar por características</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {availableFilters.map((filter) => {
                  const isActive = activeFilters.includes(filter);
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => toggleFilter(filter)}
                      aria-pressed={isActive}
                      className={`inline-flex min-h-9 items-center rounded-full border px-4 text-xs font-semibold transition ${
                        isActive
                          ? "border-ink bg-ink text-white"
                          : "border-line bg-white text-ink hover:border-olive hover:text-olive"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
                {activeFilters.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => setActiveFilters([])}
                    className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-4 text-xs font-semibold text-muted transition hover:border-terracotta hover:text-terracotta"
                  >
                    Quitar filtros
                  </button>
                ) : null}
              </div>
            </div>
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
