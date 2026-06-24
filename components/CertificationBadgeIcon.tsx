import type { Certification } from "@/data/products";

type CertificationBadgeIconProps = {
  badge?: Certification["badge"];
  className?: string;
};

function IsoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="16.5" fill="none" stroke="currentColor" strokeWidth="1.1" strokeDasharray="2.4 2.4" />
      <text
        x="24"
        y="22.5"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.5"
      >
        ISO
      </text>
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fontSize="7"
        fontWeight="600"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        9001
      </text>
    </svg>
  );
}

function HalalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 11c-4.5 2.6-7.2 7-7.2 12s2.7 9.4 7.2 12c-1.1.45-2.3.7-3.6.7-7 0-12.7-5.68-12.7-12.7S13.4 10.3 20.4 10.3c1.3 0 2.5.25 3.6.7Z"
        fill="currentColor"
      />
      <circle cx="31" cy="18.5" r="2.1" fill="currentColor" />
    </svg>
  );
}

function KosherIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="24" y="29" textAnchor="middle" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="Arial, sans-serif">
        K
      </text>
    </svg>
  );
}

function SanitaryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        d="M24 5 9 10.5v11.7c0 10 6.3 16.9 15 20.8 8.7-3.9 15-10.8 15-20.8V10.5L24 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16.8 23.6l5 5.2 9.6-10.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CertificationBadgeIcon({ badge, className = "h-10 w-10 text-ink" }: CertificationBadgeIconProps) {
  if (badge === "iso") return <IsoIcon className={className} />;
  if (badge === "halal") return <HalalIcon className={className} />;
  if (badge === "sanitary") return <SanitaryIcon className={className} />;
  if (badge === "kosher") return <KosherIcon className={className} />;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 24.5l5.2 5.4 10.8-11.8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
