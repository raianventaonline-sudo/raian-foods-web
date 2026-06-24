import type { CSSProperties } from "react";

type BorderBeamProps = {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
};

/**
 * Animated light beam that travels around an element's border, inspired by
 * the open-source "Border Beam" pattern popular on component libraries like
 * Magic UI / 21st.dev. Pair with a `relative overflow-hidden rounded-*` parent.
 * Honors prefers-reduced-motion via the global animation-disable rule.
 */
export function BorderBeam({
  size = 80,
  duration = 6,
  delay = 0,
  colorFrom = "#B86744",
  colorTo = "#3F4F2F",
  className = ""
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="raian-border-beam bg-[linear-gradient(to_left,var(--beam-from),var(--beam-to),transparent)]"
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            animationDuration: `${duration}s`,
            animationDelay: `-${delay}s`,
            "--beam-from": colorFrom,
            "--beam-to": colorTo
          } as CSSProperties
        }
      />
    </div>
  );
}
