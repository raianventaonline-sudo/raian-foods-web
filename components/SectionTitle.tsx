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
        <p className="mb-4 text-xs font-semibold uppercase leading-none tracking-[0.18em] text-terracotta">{eyebrow}</p>
      ) : null}
      <h2 className="raian-display-balance font-display text-[2.1rem] font-medium leading-[1.05] text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
