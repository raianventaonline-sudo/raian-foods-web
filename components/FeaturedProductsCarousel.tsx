"use client";

import { useRef } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/data/products";

type FeaturedProductsCarouselProps = {
  products: Product[];
};

export function FeaturedProductsCarousel({ products }: FeaturedProductsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: -1 | 1) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstItem = track.querySelector<HTMLElement>("[data-carousel-item]");
    const scrollAmount = firstItem ? firstItem.offsetWidth + 24 : track.clientWidth * 0.85;

    track.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Ver productos anteriores"
          onClick={() => scrollCarousel(-1)}
          className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Ver más productos destacados"
          onClick={() => scrollCarousel(1)}
          className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        aria-label="Carrusel de productos destacados"
      >
        {products.map((product) => (
          <div
            key={product.slug}
            data-carousel-item
            className="min-w-[82%] snap-start sm:min-w-[420px] lg:min-w-[390px] xl:min-w-[410px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
