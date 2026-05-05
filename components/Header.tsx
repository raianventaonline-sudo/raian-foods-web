"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { navigation } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-xl">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-5 md:px-8">
        <Link href="/" prefetch={false} className="flex shrink-0 items-center" aria-label="Inicio de RAIAN">
          <BrandLogo priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`text-sm font-semibold transition hover:text-olive ${
                  isActive ? "text-olive" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher compact className="shrink-0" />
          <Link
            href="/productos"
            prefetch={false}
            className="hidden min-h-12 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 sm:inline-flex"
          >
            Ver catálogo
          </Link>
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            onClick={() => setIsOpen((current) => !current)}
          >
            Menú
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={`border-t border-line bg-white px-5 py-4 lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Navegación móvil">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink transition hover:bg-sage"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
