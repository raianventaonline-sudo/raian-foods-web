export type QrLink = {
  targetPath: string;
};

export const qrLinks: Record<string, QrLink> = {
  // ── Gelatina bovina ─────────────────────────────────────────────────────
  "gelatina-bovina": {
    targetPath: "/productos/gelatina-neutra-bovina"
  },
  "gelatina-bobina": {
    targetPath: "/productos/gelatina-neutra-bovina"
  },
  "gelatina-neutra-bovina": {
    targetPath: "/productos/gelatina-neutra-bovina"
  },
  "gelatina-neutra-bobina": {
    targetPath: "/productos/gelatina-neutra-bovina"
  },

  // ── Gelatina porcina ─────────────────────────────────────────────────────
  "gelatina-porcina": {
    targetPath: "/productos/gelatina-neutra-porcina"
  },
  "gelatina-neutra-porcina": {
    targetPath: "/productos/gelatina-neutra-porcina"
  },

  // ── Cacao premium alcalinizado 22-24% (producto existente) ───────────────
  cacao: {
    targetPath: "/productos/cacao-en-polvo-alcalino"
  },
  "cacao-puro": {
    targetPath: "/productos/cacao-en-polvo-alcalino"
  },
  "cacao-en-polvo-alcalino": {
    targetPath: "/productos/cacao-en-polvo-alcalino"
  },
  "cacao-puro-natural-alcalinizado": {
    targetPath: "/productos/cacao-en-polvo-alcalino"
  },
  "cacao-premium": {
    targetPath: "/productos/cacao-en-polvo-alcalino"
  },
  "cacao-22-24": {
    targetPath: "/productos/cacao-en-polvo-alcalino"
  },
  "cacao-premium-22-24": {
    targetPath: "/productos/cacao-en-polvo-alcalino"
  },

  // ── Cacao alcalinizado 10/12% (nuevo) ────────────────────────────────────
  "cacao-10-12": {
    targetPath: "/productos/cacao-en-polvo-alcalino-10-12"
  },
  "cacao-alcalinizado-10-12": {
    targetPath: "/productos/cacao-en-polvo-alcalino-10-12"
  },
  "cacao-en-polvo-alcalino-10-12": {
    targetPath: "/productos/cacao-en-polvo-alcalino-10-12"
  },

  // ── Cacao natural 10/12% (nuevo) ─────────────────────────────────────────
  "cacao-natural": {
    targetPath: "/productos/cacao-natural-10-12"
  },
  "cacao-natural-10-12": {
    targetPath: "/productos/cacao-natural-10-12"
  },
  "cacao-no-alcalinizado": {
    targetPath: "/productos/cacao-natural-10-12"
  },

  // ── Levadura seca instantánea (nuevo) ────────────────────────────────────
  levadura: {
    targetPath: "/productos/levadura-instantanea"
  },
  "levadura-instantanea": {
    targetPath: "/productos/levadura-instantanea"
  },
  "levadura-en-polvo": {
    targetPath: "/productos/levadura-instantanea"
  },
  "levadura-seca-instantanea": {
    targetPath: "/productos/levadura-instantanea"
  }
};
