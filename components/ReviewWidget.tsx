"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

type ReviewWidgetProps = {
  reviewUrl?: string;
  productName: string;
};

const REVIEW_HEADLINE = "Tu opinión nos ayuda a crecer";
const REVIEW_BODY =
  "Somos una empresa española y joven, y nos tomamos muy en serio cada reseña que recibimos. Trabajamos cada día para mejorar nuestros productos, y tu opinión es la mejor guía para conseguirlo. Solo te llevará unos segundos, y para nosotros supone una ayuda enorme.";

function StarIcon({ className = "h-7 w-7 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.6 5.9 20.9l1.3-6.7-5-4.7 6.8-.8L12 2.5Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/**
 * Floating review bubble that is always available (not gated by QR origin
 * or any localStorage "dismissed/confirmed" state from the QR-only flow).
 */
export function ReviewFloatingBubble({ reviewUrl, productName }: ReviewWidgetProps) {
  const [open, setOpen] = useState(false);

  if (!reviewUrl) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
          >
            <div className="relative overflow-hidden bg-[linear-gradient(120deg,#B86744_0%,#D08259_60%,#B86744_100%)] px-5 py-4">
              <div className="pointer-events-none absolute inset-0 raian-grain opacity-[0.08]" />
              <div className="relative flex items-start justify-between gap-2">
                <div className="flex gap-1" aria-hidden>
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 320 }}
                    >
                      <StarIcon className="h-5 w-5 text-white" />
                    </motion.span>
                  ))}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar"
                  className="shrink-0 text-white/70 transition hover:text-white"
                >
                  <XIcon />
                </button>
              </div>
              <p className="relative mt-2 font-display text-xl text-white">{REVIEW_HEADLINE}</p>
            </div>
            <div className="p-5">
              <p className="text-sm leading-6 text-muted">{REVIEW_BODY}</p>
              <motion.a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 block rounded-full bg-[linear-gradient(90deg,#B86744,#D08259)] py-2.5 text-center text-sm font-semibold text-white shadow-md transition"
              >
                Dejar mi reseña de {productName} →
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((value) => !value)}
        aria-label="Dejar una reseña"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="raian-pulse-terracotta raian-float flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#B86744,#D08259)] shadow-lg"
      >
        <StarIcon />
      </motion.button>
    </div>
  );
}

/** Static, always-visible card with a direct review CTA — no dependency on QR state. */
export function ReviewCTA({ reviewUrl, productName }: ReviewWidgetProps) {
  if (!reviewUrl) return null;

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#FBF1EA_55%,#F4DECF_100%)] p-6 text-center shadow-sm md:p-8">
        <div className="pointer-events-none absolute inset-0 raian-grain opacity-[0.05]" />
        <div className="relative flex justify-center gap-1.5" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8, rotate: -45 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 280 }}
              className="text-terracotta"
            >
              <StarIcon className="h-6 w-6" />
            </motion.span>
          ))}
        </div>
        <p className="relative mt-4 font-display text-2xl text-ink">{REVIEW_HEADLINE}</p>
        <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">{REVIEW_BODY}</p>
        <motion.a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#B86744,#D08259)] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition"
        >
          Dejar mi reseña de {productName} →
        </motion.a>
      </div>
    </Reveal>
  );
}
