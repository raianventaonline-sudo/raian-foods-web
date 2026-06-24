"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { TechnicalRow } from "@/data/products";

type ProductTechnicalTableProps = {
  rows: TechnicalRow[];
};

const easing = [0.22, 1, 0.36, 1] as const;
const isUrl = (value: string) => value.startsWith("http://") || value.startsWith("https://");

function CellValue({ label, value }: TechnicalRow) {
  if (label === "Enlace Amazon" && isUrl(value)) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="raian-button-glow inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#A85F3A]"
      >
        Comprar en Amazon
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    );
  }
  return <span className="text-sm leading-6 text-ink">{value}</span>;
}

export function ProductTechnicalTable({ rows }: ProductTechnicalTableProps) {
  const reduceMotion = useReducedMotion();

  const itemTransition = (index: number): Transition => ({
    duration: 0.45,
    delay: reduceMotion ? 0 : index * 0.06,
    ease: easing
  });

  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {rows.map((row, index) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={itemTransition(index)}
          whileHover={{ y: -2 }}
          className={`rounded-xl border border-line bg-white px-4 py-3.5 shadow-sm transition-shadow hover:shadow-md ${
            row.label === "Enlace Amazon" ? "sm:col-span-2" : ""
          }`}
        >
          <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-terracotta">{row.label}</dt>
          <dd className="mt-1.5">
            <CellValue label={row.label} value={row.value} />
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}
