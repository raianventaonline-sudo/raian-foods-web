import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";

type TrustItem = {
  value: number;
  suffix?: string;
  label: string;
  hint?: string;
};

type TrustStripProps = {
  items: TrustItem[];
  eyebrow?: string;
  className?: string;
};

export function TrustStrip({ items, eyebrow, className = "" }: TrustStripProps) {
  return (
    <section className={`border-y border-line bg-white py-10 md:py-12 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {eyebrow ? (
          <Reveal as="p" className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-olive">
            {eyebrow}
          </Reveal>
        ) : null}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={item.label}
              as="li"
              delay={index * 0.08}
              className="group flex flex-col items-center text-center"
            >
              <span className="font-display text-5xl font-medium leading-none text-ink md:text-6xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </span>
              <span className="mt-3 text-sm font-semibold uppercase tracking-wider text-olive">{item.label}</span>
              {item.hint ? <span className="mt-1 text-xs leading-5 text-muted">{item.hint}</span> : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
