"use client";

import { useEffect } from "react";

/** Forces the client-side AutoTranslator to English for all /en/ pages. */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.localStorage.setItem("raian-language", "en");
    window.dispatchEvent(new CustomEvent("raian-language-change", { detail: "en" }));
  }, []);

  return <>{children}</>;
}
