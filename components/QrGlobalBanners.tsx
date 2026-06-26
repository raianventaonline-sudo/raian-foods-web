"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import {
  TOP_BANNER_DISMISSED_KEY,
  getActiveQrSession,
  readJson,
  writeJson,
  type ActiveQrSession
} from "@/lib/qrSession";

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16.004 3C9.376 3 4 8.373 4 14.997c0 2.5.73 4.83 2 6.78L4.5 28.5l6.92-1.82a12.92 12.92 0 0 0 4.58.83h.004c6.628 0 12.004-5.373 12.004-11.997C28.008 8.373 22.632 3 16.004 3Z" />
    </svg>
  );
}

function ContactTopBannerInner() {
  const searchParams = useSearchParams();
  const isQrRef = searchParams.get("ref") === "qr";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = readJson<number>(TOP_BANNER_DISMISSED_KEY, 0);
    const hasActiveSession = getActiveQrSession() != null;
    if ((isQrRef || hasActiveSession) && !dismissed) {
      setVisible(true);
    }
  }, [isQrRef]);

  const dismiss = () => {
    writeJson(TOP_BANNER_DISMISSED_KEY, Date.now());
    setVisible(false);
  };

  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Consulta sobre mi producto RAIAN")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola, he escaneado el QR de mi producto RAIAN y tengo una consulta."
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="relative w-full border-b border-line bg-cream px-4 py-2.5">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1.5 pr-7 text-center">
              <p className="text-xs leading-5 text-ink/80 md:text-sm">
                ¿Algún problema con el producto, en cualquier momento de su vida? No dudes en contactar con
                nosotros.
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={mailHref}
                  className="inline-flex items-center gap-1.5 rounded-full border border-olive/40 px-3 py-1 text-xs font-semibold text-olive transition hover:bg-olive hover:text-white"
                >
                  <MailIcon /> Email
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white transition hover:brightness-95"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
            </div>
            <button
              onClick={dismiss}
              aria-label="Cerrar aviso de contacto"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 transition hover:text-ink"
            >
              <XIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ReviewBottomBannerInner() {
  const searchParams = useSearchParams();
  const isQrRef = searchParams.get("ref") === "qr";
  const [session, setSession] = useState<ActiveQrSession | null>(null);

  useEffect(() => {
    const active = getActiveQrSession();
    if (active) setSession(active);
  }, [isQrRef]);

  useEffect(() => {
    document.body.classList.toggle("has-qr-review-banner", session != null);
    return () => document.body.classList.remove("has-qr-review-banner");
  }, [session]);

  const dismiss = () => setSession(null);

  if (!session) return null;

  const url = session.reviewUrl ?? "#";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="fixed inset-x-0 bottom-0 z-40"
      >
        <div className="border-t border-line bg-ink/95 px-4 py-2.5 text-white shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <p className="flex-1 text-xs leading-5 text-white/90 md:text-sm">
              Perdona la insistencia, pero necesitamos tu reseña.{" "}
              <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
                Pulsa aquí para dejarla →
              </a>
            </p>
            <button
              onClick={dismiss}
              aria-label="Cerrar aviso de reseña"
              className="shrink-0 text-white/50 transition hover:text-white"
            >
              <XIcon />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function QrGlobalBanners() {
  return (
    <Suspense>
      <ContactTopBannerInner />
      <ReviewBottomBannerInner />
    </Suspense>
  );
}
