import type { RecipeRatingSummary } from "@/lib/recipeRatings";

type RatingStarsProps = {
  summary?: RecipeRatingSummary;
  className?: string;
  compact?: boolean;
};

const values = [1, 2, 3, 4, 5];

const formatAverage = (average: number) =>
  new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 1,
    minimumFractionDigits: average % 1 === 0 ? 0 : 1
  }).format(average);

const formatCount = (count: number) => (count === 1 ? "1 valoracion" : `${count} valoraciones`);

export function RatingStars({ summary, className = "", compact = false }: RatingStarsProps) {
  const average = summary?.average ?? 0;
  const count = summary?.count ?? 0;
  const roundedAverage = Math.round(average);
  const label = count > 0 ? `${formatAverage(average)} de 5, ${formatCount(count)}` : "Sin valoraciones";

  return (
    <div className={`flex flex-wrap items-center gap-2 text-sm ${className}`} aria-label={label}>
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {values.map((value) => (
          <span key={value} className={value <= roundedAverage ? "text-terracotta" : "text-line"}>
            ★
          </span>
        ))}
      </div>
      <span className={count > 0 ? "font-semibold text-ink" : "text-muted"}>
        {count > 0 ? `${formatAverage(average)} · ${formatCount(count)}` : compact ? "Sin votos" : "Sin valoraciones"}
      </span>
    </div>
  );
}
