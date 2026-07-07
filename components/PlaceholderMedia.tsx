import Image from "next/image";
import type { ImageAsset } from "@/data/products";

type PlaceholderMediaProps = {
  asset: ImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PlaceholderMedia({
  asset,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 42vw, 100vw"
}: PlaceholderMediaProps) {
  if (asset.available) {
    const fit = asset.fit ?? "cover";
    const imageClassName = fit === "contain" ? "object-contain p-3" : "object-cover";
    const isSvg = asset.src.endsWith(".svg") || asset.src.endsWith(".png") || asset.src.endsWith(".webp");

    return (
      <div className={`raian-media relative overflow-hidden rounded-lg bg-beige ${className}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          className={`${imageClassName} raian-media-image`}
          priority={priority}
          sizes={sizes}
          unoptimized={isSvg}
        />
      </div>
    );
  }

  return (
    <div
      className={`raian-media relative flex overflow-hidden rounded-lg border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3EA_45%,#E9DDC9_100%)] ${className}`}
      role="img"
      aria-label={asset.alt}
    >
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(111,125,79,0.10)_1px,transparent_1px),linear-gradient(rgba(185,111,69,0.10)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative m-auto max-w-[70%] text-center">
        <p className="font-display text-2xl leading-tight text-ink md:text-3xl">{asset.label}</p>
        <p className="mt-3 text-sm leading-6 text-muted">Visual pendiente de validar</p>
      </div>
    </div>
  );
}
