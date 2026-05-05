import recipesSource from "./recipes-gelatina-bovina-260-bloom.json";
import type { ImageAsset } from "@/data/products";

export type RecipeCategory = "fitness" | "premium" | "familiar" | "casera";
export type RecipeDiet = "sin-lactosa" | "sin-gluten";

export type RecipeFilters = {
  category?: RecipeCategory;
  diet?: RecipeDiet;
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
  ingredients: RecipeIngredient[];
  steps: string[];
  nutrition_per_serving: RecipeNutrition;
  nutrition_per_100g_estimated: RecipeNutrition;
  estimated_serving_g: number;
  keywords: string[];
  notes: string;
};

type RecipesSource = {
  brand: string;
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
};

const source = recipesSource as RecipesSource;

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
  "chocolate blanco"
];

const glutenIngredientTerms = ["galleta", "avena", "harina", "trigo"];

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const hasTextMatch = (values: string[], terms: string[]) => {
  const normalizedValues = values.map(normalizeText);

  return terms.some((term) => normalizedValues.some((value) => value.includes(normalizeText(term))));
};

const getRecipeDiets = (recipe: SourceRecipe): RecipeDiet[] => {
  const allergenText = recipe.allergens.join(" ");
  const ingredientNames = recipe.ingredients.map((ingredient) => ingredient.name);
  const hasDairy = normalizeText(allergenText).includes("leche") || hasTextMatch(ingredientNames, dairyIngredientTerms);
  const hasGluten = normalizeText(allergenText).includes("gluten") || hasTextMatch(ingredientNames, glutenIngredientTerms);
  const diets: RecipeDiet[] = [];

  if (!hasDairy) {
    diets.push("sin-lactosa");
  }

  if (!hasGluten) {
    diets.push("sin-gluten");
  }

  return diets;
};

const formatMinutes = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return remainingMinutes > 0 ? `${hours} h ${remainingMinutes} min` : `${hours} h`;
};

export const recipeProduct = {
  name: source.product.name,
  slug: "gelatina-neutra-bovina",
  dosageNote: source.product.dosage_note,
  technicalNote: source.product.technical_note
};

export const recipeRequirements = source.website_requirements;

export const recipeCategories = source.website_requirements.categories.map((category) => ({
  slug: category,
  label: categoryLabels[category]
}));

export const recipeDietFilters = (Object.keys(dietLabels) as RecipeDiet[]).map((diet) => ({
  slug: diet,
  label: dietLabels[diet]
}));

export const recipes: Recipe[] = source.recipes.map((recipe) => {
  const diets = getRecipeDiets(recipe);

  return {
    ...recipe,
    name: recipe.title,
    seoTitle: recipe.seo_title,
    metaDescription: recipe.meta_description,
    summary: recipe.intro,
    categoryLabel: categoryLabels[recipe.category],
    relatedProduct: recipeProduct.name,
    relatedProductSlug: recipeProduct.slug,
    time: formatMinutes(recipe.times.total_min),
    image: {
      src: `/images/recipes/${recipe.slug}.svg`,
      alt: `${recipe.title} preparada como receta RAIAN`,
      label: categoryLabels[recipe.category],
      available: true
    },
    diets,
    dietLabels: diets.map((diet) => dietLabels[diet])
  };
});

export const getRecipeBySlug = (slug: string) => recipes.find((recipe) => recipe.slug === slug);

export const getRecipesByFilters = ({ category, diet }: RecipeFilters = {}) => {
  return recipes.filter((recipe) => {
    const matchesCategory = category ? recipe.category === category : true;
    const matchesDiet = diet ? recipe.diets.includes(diet) : true;

    return matchesCategory && matchesDiet;
  });
};

export const getRecipesByCategory = (category?: string) =>
  getRecipesByFilters({ category: isRecipeCategory(category) ? category : undefined });

export const getRecipesForProduct = (slugs: string[]) => recipes.filter((recipe) => slugs.includes(recipe.slug));

export const isRecipeCategory = (category?: string): category is RecipeCategory =>
  Boolean(category && category in categoryLabels);

export const isRecipeDiet = (diet?: string): diet is RecipeDiet => Boolean(diet && diet in dietLabels);

export const getRecipeCategoryLabel = (category: RecipeCategory) => categoryLabels[category];

export const getRecipeDietLabel = (diet: RecipeDiet) => dietLabels[diet];
