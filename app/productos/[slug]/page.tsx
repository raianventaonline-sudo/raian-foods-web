import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { NutritionTable } from "@/components/NutritionTable";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ProductHero } from "@/components/ProductHero";
import { ProductTechnicalTable } from "@/components/ProductTechnicalTable";
import { RecipeCard } from "@/components/RecipeCard";
import { RelatedProducts } from "@/components/RelatedProducts";
import { SectionTitle } from "@/components/SectionTitle";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { getRecipesForProduct } from "@/data/recipes";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Producto no encontrado"
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `/productos/${product.slug}`
    },
    openGraph: {
      title: `${product.name} | RAIAN Foods`,
      description: product.shortDescription,
      type: "website",
      url: `/productos/${product.slug}`
    }
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const relatedRecipes = getRecipesForProduct(product.recipeSlugs);

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Productos", href: "/productos" },
          { name: product.name, href: `/productos/${product.slug}` }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: product.name, href: `/productos/${product.slug}` }
        ]}
      />
      <ProductHero product={product} />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Galería" title="Imágenes preparadas para producto, envase y detalles." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {product.gallery.map((asset) => (
              <PlaceholderMedia key={asset.label} asset={asset} className="aspect-square" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] md:px-8">
          <SectionTitle eyebrow="Descripción" title="Ficha editable del producto." />
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>{product.description}</p>
            <p>
              Los datos técnicos, nutricionales y de etiquetado quedan preparados como campos editables hasta contar con
              documentación real de producto, etiquetado y proveedor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle eyebrow="Usos prácticos" title="Ideas de uso alimentario." />
            <ul className="mt-8 space-y-3">
              {product.uses.map((use) => (
                <li key={use} className="rounded-lg border border-line bg-cream px-4 py-3 text-sm leading-6 text-muted">
                  {use}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Cómo utilizarlo" title="Pasos base editables." />
            <ol className="mt-8 space-y-3">
              {product.howToUse.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-lg border border-line bg-white px-4 py-4 text-sm leading-6 text-muted">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-olive text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-2 md:px-8">
          <div>
            <SectionTitle eyebrow="Ficha técnica" title="Datos de producto pendientes de validación." />
            <div className="mt-8">
              <ProductTechnicalTable rows={product.technicalSheet} />
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Información nutricional" title="Tabla editable por 100 g." />
            <div className="mt-8">
              <NutritionTable rows={product.nutrition} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <article className="rounded-lg border border-line bg-cream p-6">
            <h2 className="font-display text-3xl text-ink">Alérgenos</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{product.allergens}</p>
          </article>
          <article className="rounded-lg border border-line bg-cream p-6">
            <h2 className="font-display text-3xl text-ink">Conservación</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{product.conservation}</p>
          </article>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Recetas relacionadas"
            title="Contenido práctico asociado al producto."
            description="Las recetas son placeholders iniciales preparados para ampliar el contenido cuando se definan textos e imágenes reales."
          />
          {relatedRecipes.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedRecipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-lg border border-line bg-white p-5 text-sm leading-7 text-muted">
              Recetas pendientes de añadir para este producto.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Productos relacionados" title="Otras referencias del catálogo." />
          <div className="mt-8">
            <RelatedProducts products={relatedProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
