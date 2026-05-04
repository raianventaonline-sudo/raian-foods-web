import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionTitle } from "@/components/SectionTitle";
import { recipes } from "@/data/recipes";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Recetas y usos",
  description:
    "Ideas, recetas y usos prácticos para acompañar los productos alimenticios de RAIAN Foods.",
  alternates: {
    canonical: "/recetas"
  }
};

export default function RecipesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", href: "/" },
          { name: "Recetas", href: "/recetas" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Recetas", href: "/recetas" }
        ]}
      />
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Contenido útil"
            title="Ideas, recetas y usos prácticos"
            description="Creamos contenido para que cada cliente sepa cómo aprovechar mejor nuestros productos en su día a día."
          />
        </div>
      </section>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-4 md:px-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
