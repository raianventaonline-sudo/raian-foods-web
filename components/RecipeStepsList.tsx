"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import Image from "next/image";

type RecipeStepsListProps = {
  recipeSlug: string;
  steps: string[];
  stepNotes?: Array<string | null | undefined>;
  stepImages: boolean[];
};

const easing = [0.22, 1, 0.36, 1] as const;

function WhyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-terracotta" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9.8 9.6c.25-1 1.1-1.6 2.2-1.6 1.1 0 2 .8 2 1.9 0 .9-.4 1.4-1.1 1.9-.5.4-.9.8-.9 1.5V14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function RecipeStepsList({ recipeSlug, steps, stepNotes, stepImages }: RecipeStepsListProps) {
  const reduceMotion = useReducedMotion();

  const itemTransition = (index: number): Transition => ({
    duration: 0.5,
    delay: reduceMotion ? 0 : index * 0.08,
    ease: easing
  });

  return (
    <ol className="mt-6 space-y-5">
      {steps.map((step, index) => {
        const hasImage = stepImages[index];
        const note = stepNotes?.[index];

        return (
          <motion.li
            key={step}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={itemTransition(index)}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:shadow-md"
          >
            {hasImage ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-beige">
                <Image
                  src={`/images/recipes/steps/${recipeSlug}-paso-${index + 1}.webp`}
                  alt={`Paso ${index + 1}: ${step}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-full bg-white/95 text-sm font-bold text-ink shadow-sm backdrop-blur">
                  {index + 1}
                </span>
              </div>
            ) : null}
            <div className="flex gap-4 p-5">
              {!hasImage ? (
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#3F4F2F,#6F7D4F)] text-sm font-bold text-white shadow-sm">
                  {index + 1}
                </span>
              ) : null}
              <div className="min-w-0">
                <p className="text-sm leading-7 text-ink">{step}</p>
                {note ? (
                  <p className="mt-3 flex items-start gap-2 rounded-lg bg-[linear-gradient(120deg,#F4DECF_0%,#F7EFE4_100%)] px-3 py-2 text-xs leading-5 text-muted">
                    <WhyIcon />
                    <span>{note}</span>
                  </p>
                ) : null}
              </div>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
