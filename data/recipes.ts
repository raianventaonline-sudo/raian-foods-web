export type Recipe = {
  slug: string;
  name: string;
  relatedProduct: string;
  relatedProductSlug: string;
  time: string;
  difficulty: string;
  image: {
    src: string;
    alt: string;
    label: string;
    available: boolean;
  };
  summary: string;
};

export const recipes: Recipe[] = [
  {
    slug: "gelatina-postres-frios",
    name: "Gelatina neutra para postres fríos",
    relatedProduct: "Gelatina neutra bovina",
    relatedProductSlug: "gelatina-neutra-bovina",
    time: "Pendiente",
    difficulty: "Pendiente",
    image: {
      src: "/images/placeholders/recipe-placeholder.svg",
      alt: "Receta de gelatina neutra para postres fríos pendiente de imagen",
      label: "Postres fríos",
      available: false
    },
    summary: "Idea de contenido para explicar usos básicos de gelatina neutra en postres fríos."
  },
  {
    slug: "mousse-basica-gelatina",
    name: "Mousse básica con gelatina neutra",
    relatedProduct: "Gelatina neutra porcina",
    relatedProductSlug: "gelatina-neutra-porcina",
    time: "Pendiente",
    difficulty: "Pendiente",
    image: {
      src: "/images/placeholders/recipe-placeholder.svg",
      alt: "Mousse básica con gelatina neutra pendiente de imagen",
      label: "Mousse básica",
      available: false
    },
    summary: "Placeholder de receta para una mousse sencilla con gelatina neutra."
  },
  {
    slug: "ideas-harina-almendra",
    name: "Ideas con harina de almendra",
    relatedProduct: "Harina de almendra",
    relatedProductSlug: "harina-de-almendra",
    time: "Pendiente",
    difficulty: "Pendiente",
    image: {
      src: "/images/placeholders/recipe-placeholder.svg",
      alt: "Ideas con harina de almendra pendientes de imagen",
      label: "Harina de almendra",
      available: false
    },
    summary: "Ideas de uso para repostería y elaboraciones caseras con harina de almendra."
  },
  {
    slug: "usos-glucosa-reposteria",
    name: "Usos de glucosa en repostería",
    relatedProduct: "Glucosa",
    relatedProductSlug: "glucosa",
    time: "Pendiente",
    difficulty: "Pendiente",
    image: {
      src: "/images/placeholders/recipe-placeholder.svg",
      alt: "Usos de glucosa en repostería pendientes de imagen",
      label: "Glucosa",
      available: false
    },
    summary: "Contenido pendiente para explicar aplicaciones culinarias de la glucosa sin claims no verificados."
  }
];

export const getRecipesForProduct = (slugs: string[]) => recipes.filter((recipe) => slugs.includes(recipe.slug));
