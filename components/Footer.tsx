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
      <div className="border-t border-line px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            {/* Óvalo CE estilo registro sanitario europeo */}
            <span className="inline-flex items-center gap-1 rounded border-2 border-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">
              ES <span className="text-[8px] font-normal">·</span> CE
            </span>
            <span className="text-xs text-muted">
              Registro Sanitario de Empresa{" "}
              <span className="font-semibold text-ink">ES 40.098583/V CE</span>
              {" "}— Empresa autorizada para la comercialización de productos alimentarios en la UE.
            </span>
          </div>
          <p className="shrink-0 text-xs text-muted">
            © {new Date().getFullYear()} RAIAN. Catálogo alimentario.
          </p>
        </div>
      </div>
    </footer>
  );
}
