import Link from "next/link";

type BreadcrumbsProps = {
  items: Array<{ label: string; href: string }>;
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Migas de pan" className="mx-auto w-full max-w-7xl px-5 pt-8 text-sm md:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-ink">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition hover:text-olive">
                  {item.label}
                </Link>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
