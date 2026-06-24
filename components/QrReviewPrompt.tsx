"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const VISITS_KEY = "raian:qr-visits";
const CONFIRMED_KEY = "raian:review-confirmed";
const DISMISSED_KEY = "raian:review-dismissed";
const DISMISS_COOLDOWN_MS = 20 * 60 * 1000;

const isSameCalendarDay = (a: number, b: number) => {
  const da = new Date(a);
  const db = new Date(b);
  return da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate();
};

type QrVisit = {
  count: number;
  firstVisit: number;
  lastVisit: number;
  productName: string;
  reviewUrl?: string;
};

const readJson = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

// ── Product page: banner + toast ──────────────────────────────────────────────

type QrReviewPromptProps = {
  productSlug: string;
  productName: string;
  reviewUrl?: string;
};

function QrReviewPromptInner({ productSlug, productName, reviewUrl }: QrReviewPromptProps) {
  const searchParams = useSearchParams();
  const isQrRef = searchParams.get("ref") === "qr";

  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  useEffect(() => {
    if (!isQrRef) return;

    const now = Date.now();
    const confirmed = readJson<Record<string, boolean>>(CONFIRMED_KEY, {});
    if (confirmed[productSlug]) return;

    const visits = readJson<Record<string, QrVisit>>(VISITS_KEY, {});
    const prev = visits[productSlug];
    const newCount = prev ? prev.count + 1 : 1;
    // Insistent only when 2+ visits AND first visit was on a different calendar day
    const repeat = newCount >= 2 && prev != null && !isSameCalendarDay(prev.firstVisit, now);

    visits[productSlug] = {
      count: newCount,
      firstVisit: prev?.firstVisit ?? now,
      lastVisit: now,
      productName,
      reviewUrl
    };
    writeJson(VISITS_KEY, visits);

    const dismissed = readJson<Record<string, number>>(DISMISSED_KEY, {});
    const dismissedAt = dismissed[productSlug] ?? 0;
    if (now - dismissedAt < DISMISS_COOLDOWN_MS) return;

    setIsRepeat(repeat);
    setShowBanner(true);
    setShowToast(true);
  }, [isQrRef, productSlug, productName, reviewUrl]);

  const dismiss = () => {
    const dismissed = readJson<Record<string, number>>(DISMISSED_KEY, {});
    dismissed[productSlug] = Date.now();
    writeJson(DISMISSED_KEY, dismissed);
    setShowBanner(false);
    setShowToast(false);
  };

  const confirm = () => {
    const c = readJson<Record<string, boolean>>(CONFIRMED_KEY, {});
    c[productSlug] = true;
    writeJson(CONFIRMED_KEY, c);
    setShowBanner(false);
    setShowToast(false);
  };

  if (!isQrRef || (!showBanner && !showToast)) return null;

  const url = reviewUrl ?? "#";

  return (
    <>
      {showBanner && (
        <div
          className={`w-full border-b px-4 py-3 ${
            isRepeat
              ? "border-terracotta/30 bg-terracotta/10"
              : "border-olive/25 bg-olive/10"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <span aria-hidden className="shrink-0">⭐</span>
            <p
              className={`flex-1 text-sm font-medium leading-5 ${
                isRepeat ? "text-terracotta" : "text-olive"
              }`}
            >
              {isRepeat
                ? "Si te gusta nuestro trabajo, por favor déjanos una reseña: nos ayuda a seguir creciendo y mejorando el producto."
                : `¿Qué tal la ${productName}? Tu opinión ayuda a otros compradores a elegir bien.`}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={confirm}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition ${
                isRepeat
                  ? "bg-terracotta hover:bg-terracotta/80"
                  : "bg-olive hover:bg-olive/80"
              }`}
            >
              Dejar reseña
            </a>
            <button
              onClick={dismiss}
              aria-label="Cerrar aviso de reseña"
              className="ml-1 shrink-0 text-muted transition hover:text-ink"
            >
              <XIcon />
            </button>
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed bottom-6 right-5 z-50 w-80 max-w-[calc(100vw-2.5rem)]">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
            <div className={`h-1 ${isRepeat ? "bg-terracotta" : "bg-olive"}`} />
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <p className="font-display text-xl text-ink">Tu opinión importa</p>
                <button
                  onClick={dismiss}
                  aria-label="Cerrar"
                  className="mt-0.5 shrink-0 text-muted transition hover:text-ink"
                >
                  <XIcon />
                </button>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                {isRepeat
                  ? "Si te gusta nuestro trabajo, por favor ponnos una reseña: nos ayuda a seguir creciendo, a seguir generando contenido y a mejorar el producto para que te llegue lo mejor posible. Solo lleva 2 minutos."
                  : `¿Qué tal la ${productName}? Cuéntaselo a otros compradores en Amazon. Solo tarda 2 minutos.`}
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={confirm}
                  className={`flex-1 rounded-full py-2.5 text-center text-sm font-semibold text-white transition ${
                    isRepeat
                      ? "bg-terracotta hover:bg-terracotta/80"
                      : "bg-olive hover:bg-olive/80"
                  }`}
                >
                  Dejar reseña →
                </a>
                <button
                  onClick={dismiss}
                  className="rounded-full border border-line px-4 py-2.5 text-sm text-muted transition hover:border-ink hover:text-ink"
                >
                  Ahora no
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function QrReviewPrompt(props: QrReviewPromptProps) {
  return (
    <Suspense>
      <QrReviewPromptInner {...props} />
    </Suspense>
  );
}

// ── Recipe page: insistent banner for repeat QR visitors ──────────────────────

function QrRecipeReviewBannerInner() {
  const [visible, setVisible] = useState(false);
  const [review, setReview] = useState<{ slug: string; productName: string; reviewUrl?: string } | null>(null);

  useEffect(() => {
    const now = Date.now();
    const visits = readJson<Record<string, QrVisit>>(VISITS_KEY, {});
    const confirmed = readJson<Record<string, boolean>>(CONFIRMED_KEY, {});
    const dismissed = readJson<Record<string, number>>(DISMISSED_KEY, {});

    for (const [slug, visit] of Object.entries(visits)) {
      if (visit.count < 2) continue;
      // Only if first visit was on a different calendar day (not same-day double scan)
      if (isSameCalendarDay(visit.firstVisit, now)) continue;
      if (confirmed[slug]) continue;
      const dismissedAt = dismissed[`recipe:${slug}`] ?? 0;
      if (now - dismissedAt < DISMISS_COOLDOWN_MS) continue;

      setReview({ slug, productName: visit.productName, reviewUrl: visit.reviewUrl });
      setVisible(true);
      break;
    }
  }, []);

  const handleDismiss = () => {
    if (review) {
      const dismissed = readJson<Record<string, number>>(DISMISSED_KEY, {});
      dismissed[`recipe:${review.slug}`] = Date.now();
      writeJson(DISMISSED_KEY, dismissed);
    }
    setVisible(false);
  };

  const handleConfirm = () => {
    if (review) {
      const c = readJson<Record<string, boolean>>(CONFIRMED_KEY, {});
      c[review.slug] = true;
      writeJson(CONFIRMED_KEY, c);
    }
    setVisible(false);
  };

  if (!visible || !review) return null;

  const url = review.reviewUrl ?? "#";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[560px] md:max-w-[calc(100vw-3rem)]">
      <div className="relative border-t border-terracotta/30 bg-ink px-5 py-5 text-white md:rounded-2xl md:border md:shadow-2xl md:px-8 md:py-6">
        <button
          onClick={handleDismiss}
          aria-label="Cerrar"
          className="absolute right-4 top-4 text-white/50 transition hover:text-white"
        >
          <XIcon />
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          RAIAN · Tu opinión
        </p>
        <p className="raian-display-balance mt-2 font-display text-xl font-medium leading-tight md:text-2xl">
          Si te gusta nuestro trabajo, por favor déjanos una reseña.
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Tu opinión sobre {review.productName} nos ayuda a seguir creciendo, a seguir generando
          contenido y a mejorar el producto para que te llegue lo mejor posible. Solo lleva 2 minutos.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConfirm}
            className="rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-terracotta/80"
          >
            Dejar reseña en Amazon →
          </a>
          <button
            onClick={handleConfirm}
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/70 transition hover:border-white hover:text-white"
          >
            Ya la he dejado
          </button>
        </div>
      </div>
    </div>
  );
}

export function QrRecipeReviewBanner() {
  return (
    <Suspense>
      <QrRecipeReviewBannerInner />
    </Suspense>
  );
}
