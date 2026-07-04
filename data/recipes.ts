import bovineGelatinSource from "./recipes-gelatina-bovina-260-bloom.json";
import { products, type ImageAsset } from "@/data/products";

export type RecipeCategory = "fitness" | "premium" | "familiar" | "casera";
export type RecipeDiet = "sin-lactosa" | "sin-gluten";

export type RecipeFilters = {
  category?: RecipeCategory;
  diet?: RecipeDiet;
  productSlugs?: string[];
};

type RecipeTimes = {
  prep_min: number;
  cook_min: number;
  rest_min: number;
  total_min: number;
};

export type RecipeIngredient = {
  name: string;
  g: number;
  key: string;
};

export type RecipeNutrition = {
  kcal: number;
  protein: number;
  carbs: number;
  sugars: number;
  fat: number;
  sat_fat: number;
  fiber: number;
  salt: number;
};

type SourceRecipe = {
  category: RecipeCategory;
  title: string;
  slug: string;
  seo_title: string;
  meta_description: string;
  intro: string;
  servings: number;
  times: RecipeTimes;
  allergens: string[];
  imagePath?: string;
  image_available?: boolean;
  ingredients: RecipeIngredient[];
  steps: string[];
  stepNotes?: Array<string | null>;
  nutrition_per_serving: RecipeNutrition;
  nutrition_per_100g_estimated: RecipeNutrition;
  estimated_serving_g: number;
  keywords: string[];
  notes: string;
};

type RecipesSource = {
  brand: string;
  product_slug?: string;
  product: {
    name: string;
    nutrition_per_100g: Record<string, number>;
    technical_note: string;
    dosage_note: string;
  };
  website_requirements: {
    market: string;
    language: string;
    categories: RecipeCategory[];
    nutrition_fields_required_eu: string[];
    allergen_policy: string;
    claim_policy: string[];
  };
  recipes: SourceRecipe[];
};

export type Recipe = SourceRecipe & {
  name: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  categoryLabel: string;
  relatedProduct: string;
  relatedProductSlug: string;
  time: string;
  image: ImageAsset;
  diets: RecipeDiet[];
  dietLabels: string[];
  productSlugs: string[];
  productLabels: string[];
};

const categoryLabels: Record<RecipeCategory, string> = {
  fitness: "Fitness",
  premium: "Premium",
  familiar: "Familiar",
  casera: "Casera"
};

const dietLabels: Record<RecipeDiet, string> = {
  "sin-lactosa": "Sin lactosa",
  "sin-gluten": "Sin gluten"
};

const dairyIngredientTerms = [
  "leche entera",
  "leche desnatada",
  "leche condensada",
  "leche evaporada",
  "nata",
  "queso",
  "yogur",
  "skyr",
  "mascarpone",
  "mantequilla",
  "chocolate blanco",
  "caseina",
  "caseína"
];

const glutenIngredientTerms = ["galleta", "avena", "harina", "trigo"];

const productIngredientTerms: Record<string, string[]> = {
  "gelatina-neutra-bovina": [
    "gelatina neutra bovina",
    "gelatina bovina neutra",
    "gelatina bovina",
    "gelatina neutra en polvo",
    "gelatina neutra",
    "gelatina en polvo"
  ],
  "gelatina-neutra-porcina": [
    "gelatina neutra porcina",
    "gelatina porcina neutra",
    "gelatina porcina",
    "gelatina neutra en polvo",
    "gelatina neutra",
    "gelatina en polvo"
  ]
};

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const hasTextMatch = (values: string[], terms: string[]) => {
  const normalizedValues = values.map(normalizeText);
  return terms.some((term) => normalizedValues.some((value) => value.includes(normalizeText(term))));
};

const getRecipeDiets = (recipe: SourceRecipe): RecipeDiet[] => {
  const allergenText = recipe.allergens.join(" ");
  const ingredientNames = recipe.ingredients.map((ingredient) => ingredient.name);
  const hasDairy =
    normalizeText(allergenText).includes("leche") || hasTextMatch(ingredientNames, dairyIngredientTerms);
  const hasGluten =
    normalizeText(allergenText).includes("gluten") || hasTextMatch(ingredientNames, glutenIngredientTerms);
  const diets: RecipeDiet[] = [];

  if (!hasDairy) diets.push("sin-lactosa");
  if (!hasGluten) diets.push("sin-gluten");

  return diets;
};

const formatMinutes = (minutes: number) => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours} h ${remainingMinutes} min` : `${hours} h`;
};

const getRecipeProductSlugs = (recipe: SourceRecipe, relatedProductSlug: string) => {
  const searchableText = normalizeText(
    [
      recipe.title,
      recipe.seo_title,
      recipe.meta_description,
      ...recipe.keywords,
      ...recipe.ingredients.map((ingredient) => ingredient.name)
    ].join(" ")
  );

  const matchedProductSlugs = products
    .filter((product) =>
      (productIngredientTerms[product.slug] ?? [product.name]).some((term) =>
        searchableText.includes(normalizeText(term))
      )
    )
    .map((product) => product.slug);

  return Array.from(new Set([relatedProductSlug, ...matchedProductSlugs]));
};

const mapSource = (source: RecipesSource): Recipe[] => {
  const productSlug = source.product_slug ?? "gelatina-neutra-bovina";
  const productName = source.product.name;
  const dosageNote = source.product.dosage_note;

  return source.recipes.map((recipe) => {
    const diets = getRecipeDiets(recipe);
    const productSlugs = getRecipeProductSlugs(recipe, productSlug);
    const productLabels = productSlugs
      .map((slug) => products.find((p) => p.slug === slug)?.name)
      .filter((name): name is string => Boolean(name));
    const imageAvailable = recipe.image_available ?? true;
    const imageSrc = recipe.imagePath ?? `/images/recipes/${recipe.slug}.svg`;

    return {
      ...recipe,
      name: recipe.title,
      seoTitle: recipe.seo_title,
      metaDescription: recipe.meta_description,
      summary: recipe.intro,
      categoryLabel: categoryLabels[recipe.category],
      relatedProduct: productName,
      relatedProductSlug: productSlug,
      time: formatMinutes(recipe.times.total_min),
      image: {
        src: imageSrc,
        alt: `${recipe.title} preparada como receta RAIAN`,
        label: categoryLabels[recipe.category],
        available: imageAvailable
      },
      diets,
      dietLabels: diets.map((diet) => dietLabels[diet]),
      productSlugs,
      productLabels
    };
  });
};

// ── Fuente principal (gelatina bovina – JSON legacy, sin product_slug) ──────
const bovineSource = bovineGelatinSource as RecipesSource;
const bovineWithSlug: RecipesSource = { ...bovineSource, product_slug: "gelatina-neutra-bovina" };

// ── Fuentes adicionales (se importan cuando el JSON existe) ──────────────────
// Cada import se activa una vez el fichero JSON correspondiente está creado.
// Para añadir un nuevo producto: crear data/recipes-{slug}.json y añadir aquí.
let extraSources: RecipesSource[] = [];

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-gelatina-neutra-porcina.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-harina-de-almendra.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-dextrosa.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-glucosa.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-chocolate-a-la-taza.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-maltodextrina.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-cacao-en-polvo-alcalino.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-caseina-pura-neutra.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-inulina-de-agave.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-pistacho-puro-en-grano.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-lecitina-de-soja.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-cobertura.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-gelatina-neutra.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-levadura-instantanea.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const m = require("./recipes-azucar-perlado.json") as RecipesSource;
  extraSources.push(m);
} catch { /* fichero aún no creado */ }

// ── Export principal ─────────────────────────────────────────────────────────
export const recipeProduct = {
  name: bovineSource.product.name,
  slug: "gelatina-neutra-bovina",
  dosageNote: bovineSource.product.dosage_note,
  technicalNote: bovineSource.product.technical_note
};

export const recipeRequirements = bovineSource.website_requirements;

export const recipeCategories = bovineSource.website_requirements.categories.map((category) => ({
  slug: category,
  label: categoryLabels[category]
}));

export const recipeDietFilters = (Object.keys(dietLabels) as RecipeDiet[]).map((diet) => ({
  slug: diet,
  label: dietLabels[diet]
}));

export const recipeProductFilters = products.map((product) => ({
  slug: product.slug,
  label: product.name
}));

export const recipes: Recipe[] = [
  ...mapSource(bovineWithSlug),
  ...extraSources.flatMap(mapSource)
];

export const getRecipeBySlug = (slug: string) => recipes.find((recipe) => recipe.slug === slug);

export const getRecipesByFilters = (filters: RecipeFilters = {}) => {
  const { category, diet, productSlugs = [] } = filters;
  const selectedProductSlugs = productSlugs.filter(Boolean);

  return recipes.filter((recipe) => {
    const matchesCategory = category ? recipe.category === category : true;
    const matchesDiet = diet ? recipe.diets.includes(diet) : true;
    const matchesProducts =
      selectedProductSlugs.length > 0
        ? selectedProductSlugs.every((slug) => recipe.productSlugs.includes(slug))
        : true;
    return matchesCategory && matchesDiet && matchesProducts;
  });
};

export const getRecipesByCategory = (category?: string) =>
  getRecipesByFilters({ category: isRecipeCategory(category) ? category : undefined });

export const getRecipesForProduct = (slugs: string[]) =>
  recipes.filter((recipe) => slugs.includes(recipe.slug));

export const isRecipeCategory = (category?: string): category is RecipeCategory =>
  Boolean(category && category in categoryLabels);

export const isRecipeDiet = (diet?: string): diet is RecipeDiet =>
  Boolean(diet && diet in dietLabels);

export const isRecipeProductSlug = (slug?: string) =>
  Boolean(slug && products.some((product) => product.slug === slug));

export const getRecipeCategoryLabel = (category: RecipeCategory) => categoryLabels[category];
export const getRecipeDietLabel = (diet: RecipeDiet) => dietLabels[diet];
export const getRecipeProductLabel = (slug: string) =>
  products.find((product) => product.slug === slug)?.name ?? slug;
