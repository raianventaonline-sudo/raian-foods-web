type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase leading-none text-terracotta">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
