import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { navigation, siteConfig } from "@/data/site";

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 md:px-8">
        <NewsletterSignup />
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <Link href="/" prefetch={false} className="inline-flex items-center" aria-label="Inicio de RAIAN">
            <BrandLogo size="footer" />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">{siteConfig.shortBrandText}</p>
          <p className="mt-4 text-sm font-semibold text-ink">Valencia, España</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.domain}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-ink">Navegación</h2>
          <ul className="mt-4 space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false} className="text-sm text-muted transition hover:text-olive">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-ink">Información</h2>
          <ul className="mt-4 space-y-3">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false} className="text-sm text-muted transition hover:text-olive">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">{siteConfig.location}</p>
          <p className="mt-2 text-sm text-muted">
            Email:{" "}
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-olive">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} RAIAN. Catálogo alimentario.
      </div>
    </footer>
  );
}
