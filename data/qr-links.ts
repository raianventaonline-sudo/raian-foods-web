export type QrLink = {
  targetPath: string;
};

export const qrLinks: Record<string, QrLink> = {
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
  }
};
