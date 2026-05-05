"use client";

import { useEffect, useState } from "react";

type CookieChoice = "accepted" | "rejected" | "configured";

export function CookieBanner() {
  const [choice, setChoice] = useState<CookieChoice | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem("raian-foods-cookie-choice") as CookieChoice | null;
    setChoice(savedChoice);
  }, []);

  function saveChoice(nextChoice: CookieChoice) {
    window.localStorage.setItem("raian-foods-cookie-choice", nextChoice);
    setChoice(nextChoice);
    setIsConfigOpen(false);
  }

  if (choice) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-line bg-white p-4 shadow-subtle md:p-5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-base font-bold text-ink">Preferencias de cookies</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Esta web puede funcionar solo con cookies técnicas. Las cookies analíticas se usarán únicamente si se activan
            más adelante y cuentas con el consentimiento correspondiente.
          </p>
          {isConfigOpen ? (
            <div className="mt-4 rounded-lg border border-line bg-cream p-4">
              <label className="flex gap-3 text-sm text-muted">
                <input type="checkbox" checked disabled className="mt-1 size-4" />
                <span>Cookies técnicas necesarias</span>
              </label>
              <label className="mt-3 flex gap-3 text-sm text-muted">
                <input type="checkbox" disabled className="mt-1 size-4" />
                <span>Cookies analíticas no activas</span>
              </label>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:pt-1">
          <button
            type="button"
            className="min-h-11 rounded-full border border-line px-5 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
            onClick={() => setIsConfigOpen((current) => !current)}
          >
            Configurar
          </button>
          <button
            type="button"
            className="min-h-11 rounded-full border border-line px-5 text-sm font-semibold text-ink transition hover:border-terracotta hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            onClick={() => saveChoice("rejected")}
          >
            Rechazar
          </button>
          <button
            type="button"
            className="min-h-11 rounded-full bg-olive px-5 text-sm font-semibold text-white transition hover:bg-[#5F6C43] focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
            onClick={() => saveChoice(isConfigOpen ? "configured" : "accepted")}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
