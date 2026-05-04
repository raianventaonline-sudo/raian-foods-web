import Image from "next/image";
import type { ImageAsset } from "@/data/products";

type PlaceholderMediaProps = {
  asset: ImageAsset;
  className?: string;
  priority?: boolean;
};

export function PlaceholderMedia({ asset, className = "", priority = false }: PlaceholderMediaProps) {
  if (asset.available) {
    const fit = asset.fit ?? "cover";

    return (
      <div className={`relative overflow-hidden rounded-lg bg-beige ${className}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          className={fit === "contain" ? "object-contain p-3" : "object-cover"}
          priority={priority}
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex overflow-hidden rounded-lg border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#FAF7F0_45%,#E8DDC8_100%)] ${className}`}
      role="img"
      aria-label={asset.alt}
    >
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(111,125,79,0.10)_1px,transparent_1px),linear-gradient(rgba(185,111,69,0.10)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative m-auto max-w-[70%] text-center">
        <p className="font-display text-2xl leading-tight text-ink md:text-3xl">{asset.label}</p>
        <p className="mt-3 text-sm leading-6 text-muted">Imagen real pendiente</p>
      </div>
    </div>
  );
}
