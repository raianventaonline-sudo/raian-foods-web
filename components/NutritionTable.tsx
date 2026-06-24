"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { NutritionRow } from "@/data/products";

type NutritionTableProps = {
  rows: NutritionRow[];
};

const easing = [0.22, 1, 0.36, 1] as const;

export function NutritionTable({ rows }: NutritionTableProps) {
  const reduceMotion = useReducedMotion();

  const itemTransition = (index: number): Transition => ({
    duration: 0.45,
    delay: reduceMotion ? 0 : index * 0.06,
    ease: easing
  });

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
      <div className="bg-[linear-gradient(135deg,#1A1A1A,#3F4F2F)] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white">
        Por 100 g
      </div>
      <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
        {rows.map((row, index) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={itemTransition(index)}
            className="bg-white px-4 py-4"
          >
            <dt className="text-[0.65rem] leading-4 text-muted">{row.label}</dt>
            <dd className="mt-1 font-display text-lg text-ink">{row.value}</dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}
