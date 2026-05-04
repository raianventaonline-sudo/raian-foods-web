import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {products.slice(0, 3).map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
