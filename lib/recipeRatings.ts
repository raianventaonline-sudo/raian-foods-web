import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export type RatingValue = 1 | 2 | 3 | 4 | 5;

export type RecipeRatingSummary = {
  slug: string;
  average: number;
  count: number;
  counts: Record<RatingValue, number>;
};

type RatingEntry = {
  counts: [number, number, number, number, number];
};

type RatingsFile = Record<string, RatingEntry>;

const ratingsFilePath = path.join(process.cwd(), "data", "recipe-ratings.json");
const emptyCounts: RatingEntry["counts"] = [0, 0, 0, 0, 0];

export const isRatingValue = (value: unknown): value is RatingValue => {
  const numericValue = Number(value);

  return Number.isInteger(numericValue) && numericValue >= 1 && numericValue <= 5;
};

const readRatingsFile = (): RatingsFile => {
  if (!existsSync(ratingsFilePath)) {
    return {};
  }

  try {
    return JSON.parse(readFileSync(ratingsFilePath, "utf8")) as RatingsFile;
  } catch {
    return {};
  }
};

const writeRatingsFile = (ratings: RatingsFile) => {
  writeFileSync(ratingsFilePath, `${JSON.stringify(ratings, null, 2)}\n`, "utf8");
};

const normalizeEntry = (entry?: RatingEntry): RatingEntry => ({
  counts: entry?.counts?.length === 5 ? entry.counts.map((count) => Math.max(0, Number(count) || 0)) as RatingEntry["counts"] : [...emptyCounts]
});

const toSummary = (slug: string, entry?: RatingEntry): RecipeRatingSummary => {
  const countsArray = normalizeEntry(entry).counts;
  const count = countsArray.reduce((sum, value) => sum + value, 0);
  const total = countsArray.reduce((sum, value, index) => sum + value * (index + 1), 0);

  return {
    slug,
    average: count > 0 ? Number((total / count).toFixed(1)) : 0,
    count,
    counts: {
      1: countsArray[0],
      2: countsArray[1],
      3: countsArray[2],
      4: countsArray[3],
      5: countsArray[4]
    }
  };
};

export const getRecipeRatingSummary = (slug: string) => toSummary(slug, readRatingsFile()[slug]);

export const getRecipeRatingSummaries = () => {
  const ratings = readRatingsFile();

  return Object.fromEntries(Object.entries(ratings).map(([slug, entry]) => [slug, toSummary(slug, entry)]));
};

export const saveRecipeRating = ({
  slug,
  rating,
  previousRating
}: {
  slug: string;
  rating: RatingValue;
  previousRating?: RatingValue;
}) => {
  const ratings = readRatingsFile();
  const entry = normalizeEntry(ratings[slug]);

  if (previousRating) {
    const previousIndex = previousRating - 1;
    entry.counts[previousIndex] = Math.max(0, entry.counts[previousIndex] - 1);
  }

  entry.counts[rating - 1] += 1;
  ratings[slug] = entry;
  writeRatingsFile(ratings);

  return toSummary(slug, entry);
};
