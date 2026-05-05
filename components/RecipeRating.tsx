"use client";

import { useEffect, useId, useState } from "react";
import { RatingStars } from "@/components/RatingStars";
import type { RecipeRatingSummary } from "@/lib/recipeRatings";

type RecipeRatingProps = {
  recipeSlug: string;
  recipeTitle: string;
};

const ratingValues = [1, 2, 3, 4, 5];

export function RecipeRating({ recipeSlug, recipeTitle }: RecipeRatingProps) {
  const headingId = useId();
  const [rating, setRating] = useState(0);
  const [previewRating, setPreviewRating] = useState(0);
  const [summary, setSummary] = useState<RecipeRatingSummary>();
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const storageKey = `raian:recipe-rating:${recipeSlug}`;
  const activeRating = previewRating || rating || Math.round(summary?.average ?? 0);

  useEffect(() => {
    const savedRating = window.localStorage.getItem(storageKey);
    const parsedRating = savedRating ? Number(savedRating) : 0;

    if (Number.isInteger(parsedRating) && parsedRating >= 1 && parsedRating <= 5) {
      setRating(parsedRating);
    }

    fetch(`/api/recipe-ratings?slug=${encodeURIComponent(recipeSlug)}`)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data: RecipeRatingSummary) => setSummary(data))
      .catch(() => setErrorMessage("No se pudieron cargar las valoraciones."));
  }, [recipeSlug, storageKey]);

  const handleRating = async (value: number) => {
    if (isSaving || rating === value) {
      return;
    }

    const previousRating = rating || undefined;

    setIsSaving(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/recipe-ratings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          slug: recipeSlug,
          rating: value,
          previousRating
        })
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar la valoracion");
      }

      const nextSummary = (await response.json()) as RecipeRatingSummary;
      setSummary(nextSummary);
      setRating(value);
      window.localStorage.setItem(storageKey, String(value));
    } catch {
      setErrorMessage("No se pudo guardar la valoracion. Intentalo de nuevo.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="mt-8 rounded-md border border-line bg-white p-5 shadow-sm" aria-labelledby={headingId}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id={headingId} className="text-sm font-bold uppercase text-ink">
            Valora esta receta
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted">Marca de 1 a 5 estrellas para sumar tu valoracion.</p>
        </div>
        <div
          className="flex items-center gap-1"
          role="radiogroup"
          aria-label={`Valoración de ${recipeTitle}`}
          onMouseLeave={() => setPreviewRating(0)}
        >
          {ratingValues.map((value) => {
            const isActive = value <= activeRating;

            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={rating === value}
                aria-label={`Valorar con ${value} de 5 estrellas`}
                onClick={() => handleRating(value)}
                disabled={isSaving}
                onFocus={() => setPreviewRating(value)}
                onBlur={() => setPreviewRating(0)}
                onMouseEnter={() => setPreviewRating(value)}
                className="grid size-11 place-items-center rounded-full text-3xl leading-none transition hover:bg-cream focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
              >
                <span aria-hidden="true" className={isActive ? "text-terracotta" : "text-line"}>
                  ★
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <RatingStars summary={summary} />
        {summary && summary.count > 0 ? (
          <p className="text-sm leading-6 text-muted">
            5 estrellas: {summary.counts[5]} · 4 estrellas: {summary.counts[4]} · 3 estrellas: {summary.counts[3]} · 2
            estrellas: {summary.counts[2]} · 1 estrella: {summary.counts[1]}
          </p>
        ) : null}
        <p className="text-sm font-semibold text-olive" aria-live="polite">
          {rating > 0 ? `Tu valoracion: ${rating} de 5` : "Aun no has valorado esta receta."}
        </p>
        {errorMessage ? <p className="text-sm font-semibold text-terracotta">{errorMessage}</p> : null}
      </div>
    </section>
  );
}
