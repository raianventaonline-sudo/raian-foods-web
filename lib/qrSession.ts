export const VISITS_KEY = "raian:qr-visits";
export const CONFIRMED_KEY = "raian:review-confirmed";
export const DISMISSED_KEY = "raian:review-dismissed";
export const ACTIVE_QR_KEY = "raian:active-qr";
export const TOP_BANNER_DISMISSED_KEY = "raian:contact-banner-dismissed";
export const VIDEO_SEEN_AT_KEY = "raian:qr-video-seen-at";

export const DISMISS_COOLDOWN_MS = 20 * 60 * 1000;
export const ACTIVE_QR_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export type QrVisit = {
  count: number;
  firstVisit: number;
  lastVisit: number;
  productName: string;
  reviewUrl?: string;
};

export type ActiveQrSession = {
  slug: string;
  productName: string;
  reviewUrl?: string;
  startedAt: number;
};

export const isSameCalendarDay = (a: number, b: number) => {
  const da = new Date(a);
  const db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
};

export const readJson = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const writeJson = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

export const clearKey = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch {}
};

export const QR_SESSION_UPDATED_EVENT = "raian:qr-session-updated";

export const setActiveQrSession = (session: Omit<ActiveQrSession, "startedAt">) => {
  writeJson(ACTIVE_QR_KEY, { ...session, startedAt: Date.now() } satisfies ActiveQrSession);
  try {
    window.dispatchEvent(new Event(QR_SESSION_UPDATED_EVENT));
  } catch {}
};

export const onQrSessionUpdated = (handler: () => void) => {
  try {
    window.addEventListener(QR_SESSION_UPDATED_EVENT, handler);
    return () => window.removeEventListener(QR_SESSION_UPDATED_EVENT, handler);
  } catch {
    return () => {};
  }
};

export const getActiveQrSession = (): ActiveQrSession | null => {
  const session = readJson<ActiveQrSession | null>(ACTIVE_QR_KEY, null);
  if (!session) return null;
  if (Date.now() - session.startedAt > ACTIVE_QR_TTL_MS) {
    clearKey(ACTIVE_QR_KEY);
    return null;
  }
  const confirmed = readJson<Record<string, boolean>>(CONFIRMED_KEY, {});
  if (confirmed[session.slug]) return null;
  return session;
};
