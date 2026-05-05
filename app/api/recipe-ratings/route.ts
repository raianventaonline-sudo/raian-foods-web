import { NextResponse } from "next/server";
import { getRecipeBySlug } from "@/data/recipes";
import {
  getRecipeRatingSummaries,
  getRecipeRatingSummary,
  isRatingValue,
  saveRecipeRating
} from "@/lib/recipeRatings";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    if (!getRecipeBySlug(slug)) {
      return NextResponse.json({ error: "Receta no encontrada" }, { status: 404 });
    }

    return NextResponse.json(getRecipeRatingSummary(slug));
  }

  return NextResponse.json(getRecipeRatingSummaries());
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const slug = typeof body?.slug === "string" ? body.slug : "";
  const rating = Number(body?.rating);
  const previousRating = body?.previousRating ? Number(body.previousRating) : undefined;

  if (!getRecipeBySlug(slug)) {
    return NextResponse.json({ error: "Receta no encontrada" }, { status: 404 });
  }

  if (!isRatingValue(rating)) {
    return NextResponse.json({ error: "Valoracion no valida" }, { status: 400 });
  }

  const summary = saveRecipeRating({
    slug,
    rating,
    previousRating: isRatingValue(previousRating) ? previousRating : undefined
  });

  return NextResponse.json(summary);
}
