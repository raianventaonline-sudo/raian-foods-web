import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
  size?: "header" | "footer" | "hero";
};

const sizeClasses = {
  header: "h-14 w-36 sm:w-44",
  footer: "h-16 w-40",
  hero: "aspect-[3377/1811] w-full"
};

export function BrandLogo({ priority = false, size = "header" }: BrandLogoProps) {
  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <Image
        src="/images/brand/raian-foods-logo.png"
        alt="Logotipo de RAIAN Foods"
        fill
        priority={priority}
        sizes={size === "hero" ? "(min-width: 768px) 45vw, 100vw" : "176px"}
        className="object-contain"
      />
    </div>
  );
}
