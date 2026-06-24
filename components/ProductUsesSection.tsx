"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

function UseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-olive" fill="none" aria-hidden>
      <path
        d="M12 21s-7-4.5-7-10.5A5 5 0 0 1 12 6a5 5 0 0 1 7 4.5C19 16.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.5 11.5l1.8 1.8L14.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProductUsesList({ uses }: { uses: string[] }) {
  const reduceMotion = useReducedMotion();

  const itemTransition = (index: number): Transition => ({
    duration: 0.5,
    delay: reduceMotion ? 0 : index * 0.07,
    ease: easing
  });

  return (
    <ul className="mt-8 space-y-3">
      {uses.map((use, index) => (
        <motion.li
          key={use}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={itemTransition(index)}
          whileHover={{ x: 4 }}
          className="group flex items-center gap-3 rounded-xl border border-line bg-[linear-gradient(120deg,#F2F6EE_0%,#E7EFE0_100%)] px-4 py-3.5 text-sm leading-6 text-ink shadow-sm transition-shadow hover:shadow-md"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white shadow-sm transition group-hover:scale-110">
            <UseIcon />
          </span>
          {use}
        </motion.li>
      ))}
    </ul>
  );
}

export function ProductStepsList({ steps }: { steps: string[] }) {
  const reduceMotion = useReducedMotion();

  const itemTransition = (index: number): Transition => ({
    duration: 0.5,
    delay: reduceMotion ? 0 : index * 0.07,
    ease: easing
  });

  return (
    <ol className="relative mt-8 space-y-3">
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easing }}
        style={{ originY: 0 }}
        className="absolute bottom-4 left-[19px] top-4 hidden w-0.5 bg-[linear-gradient(180deg,#3F4F2F,#6F7D4F)] sm:block"
      />
      {steps.map((step, index) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={itemTransition(index)}
          className="relative flex gap-4 rounded-xl border border-line bg-white px-4 py-4 text-sm leading-6 text-muted shadow-sm transition hover:border-olive/40 hover:shadow-md"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...itemTransition(index), type: "spring", stiffness: 300 }}
            className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#3F4F2F,#6F7D4F)] text-sm font-bold text-white shadow-sm"
          >
            {index + 1}
          </motion.span>
          <span className="pt-0.5">{step}</span>
        </motion.li>
      ))}
    </ol>
  );
}
