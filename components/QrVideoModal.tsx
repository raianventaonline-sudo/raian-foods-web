"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  CONFIRMED_KEY,
  getActiveQrSession,
  onQrSessionUpdated,
  readJson,
  writeJson,
  type ActiveQrSession
} from "@/lib/qrSession";

const VIDEO_DURATION_FALLBACK = 11;

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SpeakerOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 9v6h4l5 5V4L8 9H4Zm12.5 3a3.5 3.5 0 0 0-1.77-3.04l.01 6.08A3.5 3.5 0 0 0 16.5 12Z" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 9v6h4l5 5V4L8 9H4Zm12.7 3 2.3 2.3 1.4-1.4L18.1 10.6l2.3-2.3-1.4-1.4-2.3 2.3-2.3-2.3-1.4 1.4 2.3 2.3-2.3 2.3 1.4 1.4 2.3-2.3Z" />
    </svg>
  );
}

function QrVideoModalInner() {
  const searchParams = useSearchParams();
  const isQrRef = searchParams.get("ref") === "qr";
  const videoRef = useRef<HTMLVideoElement>(null);

  const [session, setSession] = useState<ActiveQrSession | null>(null);
  const [visible, setVisible] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(VIDEO_DURATION_FALLBACK);
  const [muted, setMuted] = useState(false);
  const [blockedHint, setBlockedHint] = useState(false);

  useEffect(() => {
    if (!isQrRef) return;

    const tryShow = () => {
      const active = getActiveQrSession();
      if (!active) return;

      setSession(active);
      setVisible(true);
    };

    tryShow();
    return onQrSessionUpdated(tryShow);
  }, [isQrRef]);

  useEffect(() => {
    if (!visible) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = false;
    const playResult = videoEl.play();
    if (playResult && typeof playResult.catch === "function") {
      playResult.catch(() => {
        // Most browsers block unmuted autoplay without a prior user gesture.
        // Fall back to muted playback and let the speaker button unmute on tap.
        videoEl.muted = true;
        setMuted(true);
        setBlockedHint(true);
        videoEl.play().catch(() => {});
      });
    }
  }, [visible]);

  const close = () => setVisible(false);

  const confirmReview = () => {
    if (!session) return;
    const confirmed = readJson<Record<string, boolean>>(CONFIRMED_KEY, {});
    confirmed[session.slug] = true;
    writeJson(CONFIRMED_KEY, confirmed);
    setVisible(false);
  };

  const unmute = () => {
    setMuted(false);
    setBlockedHint(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  if (!session) return null;

  const reviewUrl = session.reviewUrl ?? "#";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            <video
              ref={videoRef}
              src="/videos/qr-review-prompt.mp4"
              poster="/videos/qr-review-prompt-poster.jpg"
              autoPlay
              muted={muted}
              playsInline
              onClick={() => muted && unmute()}
              onLoadedMetadata={(e) => setSecondsLeft(Math.ceil(e.currentTarget.duration))}
              onTimeUpdate={(e) => {
                const remaining = Math.max(0, Math.ceil(e.currentTarget.duration - e.currentTarget.currentTime));
                setSecondsLeft(remaining);
              }}
              onEnded={close}
              className="h-full w-full object-cover"
            />

            <div className="absolute right-3 top-3 flex items-center gap-2">
              <button
                onClick={() => (muted ? unmute() : setMuted(true))}
                aria-label={muted ? "Activar sonido" : "Silenciar"}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              >
                {muted ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-xs font-bold text-white">
                {secondsLeft}s
              </div>
              <button
                onClick={close}
                aria-label="Cerrar vídeo"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              >
                <XIcon />
              </button>
            </div>

            {blockedHint && (
              <button
                onClick={unmute}
                className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white"
              >
                🔇 Toca para activar el sonido
              </button>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 pt-10">
              <p className="text-sm font-medium leading-5 text-white">
                ¿Qué tal {session.productName}? Tu reseña nos ayuda muchísimo.
              </p>
              <motion.a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={confirmReview}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink shadow-md transition"
              >
                Dejar reseña ahora →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function QrVideoModal() {
  return (
    <Suspense>
      <QrVideoModalInner />
    </Suspense>
  );
}
