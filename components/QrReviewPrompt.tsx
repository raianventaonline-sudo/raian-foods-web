"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  CONFIRMED_KEY,
  DISMISSED_KEY,
  DISMISS_COOLDOWN_MS,
  VISITS_KEY,
  isSameCalendarDay,
  readJson,
  setActiveQrSession,
  writeJson,
  type QrVisit
} from "@/lib/qrSession";

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function AnimatedStars() {
  return (
    <div className="flex shrink-0 gap-0.5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.15 + i * 0.07, type: "spring", stiffness: 320, damping: 14 }}
        >
          <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.6 5.9 20.9l1.3-6.7-5-4.7 6.8-.8L12 2.5Z" />
        </motion.svg>
      ))}
    </div>
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
    setActiveQrSession({ slug: productSlug, productName, reviewUrl });

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

  if (!isQrRef) return null;

  const url = reviewUrl ?? "#";

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className={`relative w-full overflow-hidden border-b px-4 py-4 ${
                isRepeat
                  ? "bg-[linear-gradient(110deg,#B86744_0%,#D08259_50%,#B86744_100%)]"
                  : "bg-[linear-gradient(110deg,#3F4F2F_0%,#6F7D4F_50%,#3F4F2F_100%)]"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 raian-grain opacity-[0.08]" />
              <div className="relative mx-auto flex max-w-7xl items-center gap-3">
                <AnimatedStars />
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 text-sm font-medium leading-5 text-white"
                >
                  {isRepeat
                    ? "Si te gusta nuestro trabajo, por favor déjanos una reseña: nos ayuda a seguir creciendo y mejorando el producto."
                    : `¿Qué tal la ${productName}? Tu opinión ayuda a otros compradores a elegir bien.`}
                </motion.p>
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={confirm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="shrink-0 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-ink shadow-md transition"
                >
                  Dejar reseña
                </motion.a>
                <button
                  onClick={dismiss}
                  aria-label="Cerrar aviso de reseña"
                  className="ml-1 shrink-0 text-white/70 transition hover:text-white"
                >
                  <XIcon />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-5 z-50 w-80 max-w-[calc(100vw-2.5rem)]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
              <div
                className={`h-1.5 ${
                  isRepeat
                    ? "bg-[linear-gradient(90deg,#B86744,#D08259,#B86744)]"
                    : "bg-[linear-gradient(90deg,#3F4F2F,#6F7D4F,#3F4F2F)]"
                }`}
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AnimatedStars />
                  </div>
                  <button
                    onClick={dismiss}
                    aria-label="Cerrar"
                    className="mt-0.5 shrink-0 text-muted transition hover:text-ink"
                  >
                    <XIcon />
                  </button>
                </div>
                <p className="mt-3 font-display text-xl text-ink">Tu opinión importa</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {isRepeat
                    ? "Si te gusta nuestro trabajo, por favor ponnos una reseña: nos ayuda a seguir creciendo, a seguir generando contenido y a mejorar el producto para que te llegue lo mejor posible. Solo lleva 2 minutos."
                    : `¿Qué tal la ${productName}? Cuéntaselo a otros compradores en Amazon. Solo tarda 2 minutos.`}
                </p>
                <div className="mt-4 flex gap-2">
                  <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={confirm}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex-1 rounded-full py-2.5 text-center text-sm font-semibold text-white shadow-md transition ${
                      isRepeat
                        ? "bg-[linear-gradient(90deg,#B86744,#D08259)]"
                        : "bg-[linear-gradient(90deg,#3F4F2F,#6F7D4F)]"
                    }`}
                  >
                    Dejar reseña →
                  </motion.a>
                  <button
                    onClick={dismiss}
                    className="rounded-full border border-line px-4 py-2.5 text-sm text-muted transition hover:border-ink hover:text-ink"
                  >
                    Ahora no
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

  const url = review?.reviewUrl ?? "#";

  return (
    <AnimatePresence>
      {visible && review && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", stiffness: 240, damping: 24 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[560px] md:max-w-[calc(100vw-3rem)]"
        >
          <div className="relative overflow-hidden border-t border-terracotta/30 bg-[linear-gradient(135deg,#18201C_0%,#262F22_55%,#3F4F2F_100%)] px-5 py-5 text-white md:rounded-2xl md:border md:shadow-2xl md:px-8 md:py-6">
            <div className="pointer-events-none absolute inset-0 raian-grain opacity-[0.06]" />
            <button
              onClick={handleDismiss}
              aria-label="Cerrar"
              className="absolute right-4 top-4 text-white/50 transition hover:text-white"
            >
              <XIcon />
            </button>
            <div className="relative">
              <div className="flex items-center gap-3">
                <AnimatedStars />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                  RAIAN · Tu opinión
                </p>
              </div>
              <p className="raian-display-balance mt-3 font-display text-xl font-medium leading-tight md:text-2xl">
                Si te gusta nuestro trabajo, por favor déjanos una reseña.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Tu opinión sobre {review.productName} nos ayuda a seguir creciendo, a seguir generando
                contenido y a mejorar el producto para que te llegue lo mejor posible. Solo lleva 2 minutos.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConfirm}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-terracotta/80"
                >
                  Dejar reseña en Amazon →
                </motion.a>
                <button
                  onClick={handleConfirm}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/70 transition hover:border-white hover:text-white"
                >
                  Ya la he dejado
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function QrRecipeReviewBanner() {
  return (
    <Suspense>
      <QrRecipeReviewBannerInner />
    </Suspense>
  );
}
