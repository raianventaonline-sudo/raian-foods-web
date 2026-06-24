"use client";

import { useState } from "react";

type ReviewWidgetProps = {
  reviewUrl?: string;
  productName: string;
};

const REVIEW_HEADLINE = "Tu opinión nos ayuda a crecer";
const REVIEW_BODY =
  "Somos una empresa española y joven, y nos tomamos muy en serio cada reseña que recibimos. Trabajamos cada día para mejorar nuestros productos, y tu opinión es la mejor guía para conseguirlo. Solo te llevará unos segundos, y para nosotros supone una ayuda enorme.";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white" aria-hidden>
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
      {open ? (
        <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
          <div className="h-1 bg-terracotta" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-2">
              <p className="font-display text-xl text-ink">{REVIEW_HEADLINE}</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="mt-0.5 shrink-0 text-muted transition hover:text-ink"
              >
                <XIcon />
              </button>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{REVIEW_BODY}</p>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-terracotta py-2.5 text-center text-sm font-semibold text-white transition hover:bg-terracotta/80"
            >
              Dejar mi reseña de {productName} →
            </a>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen((value) => !value)}
        aria-label="Dejar una reseña"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta shadow-lg transition hover:scale-105 hover:shadow-xl"
      >
        <StarIcon />
      </button>
    </div>
  );
}

/** Static, always-visible card with a direct review CTA — no dependency on QR state. */
export function ReviewCTA({ reviewUrl, productName }: ReviewWidgetProps) {
  if (!reviewUrl) return null;

  return (
    <div className="rounded-md border border-line bg-white p-6 text-center md:p-8">
      <p className="font-display text-2xl text-ink">{REVIEW_HEADLINE}</p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">{REVIEW_BODY}</p>
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-terracotta/80"
      >
        Dejar mi reseña de {productName} →
      </a>
    </div>
  );
}
