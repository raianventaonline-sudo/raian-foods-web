"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { navigation } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 8);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-line/70 bg-white/80 shadow-[0_12px_34px_rgba(24,32,28,0.08)]"
          : "border-line bg-white/95 shadow-none"
      }`}
    >
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

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-sage hover:text-olive hover:shadow-[0_0_0_3px_rgba(191,220,175,0.28)] ${
                  isActive ? "bg-sage text-olive shadow-[inset_0_0_0_1px_rgba(82,107,77,0.16)]" : "text-muted"
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
            className="raian-button-glow hidden min-h-12 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 sm:inline-flex"
          >
            Ver catálogo
          </Link>
          <button
            type="button"
            className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-olive hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 lg:hidden"
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
        className={`border-t border-line bg-white/92 px-5 py-4 backdrop-blur-xl lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Navegación móvil">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink transition hover:translate-x-1 hover:bg-sage hover:text-olive"
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
