import type { Certification } from "@/data/products";

type ProductCertificationsProps = {
  certifications: Certification[];
};

const badgeIcon: Record<NonNullable<Certification["badge"]>, string> = {
  iso: "🏆",
  halal: "☪",
  sanitary: "🛡️"
};

export function ProductCertifications({ certifications }: ProductCertificationsProps) {
  if (certifications.length === 0) return null;

  return (
    <div className="rounded-md border border-line bg-white">
      <ul className="divide-y divide-line">
        {certifications.map((cert) => (
          <li key={cert.name} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-3">
              <span className="mt-0.5 text-2xl" aria-hidden>
                {cert.badge ? badgeIcon[cert.badge] : "✔"}
              </span>
              <div>
                <p className="font-display text-lg text-ink">{cert.name}</p>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                {cert.certNumber ? (
                  <p className="mt-1 text-xs text-muted">
                    Nº certificado: <span className="font-semibold text-ink">{cert.certNumber}</span>
                    {cert.validUntil ? <> · Válido hasta {cert.validUntil}</> : null}
                  </p>
                ) : null}
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{cert.description}</p>
              </div>
            </div>
            {cert.fileUrl ? (
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-line bg-cream px-4 py-2 text-xs font-semibold text-ink transition hover:bg-sage"
              >
                Descargar PDF
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
