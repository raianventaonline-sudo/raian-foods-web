"use client";

import { useEffect, useState } from "react";
import { defaultLocale, isLocale, languages, type Locale } from "@/lib/i18n";

const storageKey = "raian-language";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
  showLabels?: boolean;
};

export function LanguageSwitcher({ className = "", compact = false, showLabels = false }: LanguageSwitcherProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(storageKey);
    const initialLocale = isLocale(storedLocale) ? storedLocale : defaultLocale;

    setLocale(initialLocale);
    document.documentElement.lang = initialLocale;
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
    document.documentElement.lang = nextLocale;
    window.dispatchEvent(new CustomEvent("raian-language-change", { detail: nextLocale }));
  };

  return (
    <div
      className={`flex items-center rounded-full border border-line bg-white/90 p-1 shadow-sm ${
        compact ? "gap-0.5" : "gap-0.5 sm:gap-1"
      } ${className}`}
      aria-label="Elegir idioma"
    >
      {languages.map((language) => {
        const isActive = language.code === locale;

        return (
          <button
            key={language.code}
            type="button"
            aria-label={language.label}
            aria-pressed={isActive}
            title={language.label}
            onClick={() => handleLocaleChange(language.code)}
            className={`flex items-center justify-center rounded-full border text-[10px] font-bold transition focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 ${
              compact ? "size-6 sm:size-7" : "min-h-7 min-w-7 sm:min-h-8 sm:min-w-8"
            } ${
              isActive ? "border-olive bg-sage text-ink" : "border-transparent text-muted hover:bg-cream hover:text-ink"
            }`}
          >
            <span
              className={`h-3 w-4 rounded-[2px] border border-black/10 ${
                showLabels ? "2xl:mr-1" : ""
              } ${language.flagClassName}`}
              aria-hidden="true"
            />
            {showLabels ? <span className="hidden 2xl:inline">{language.shortLabel}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
