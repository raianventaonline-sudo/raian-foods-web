"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/Reveal";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" aria-hidden>
      <path
        d="M12 3 4.5 6v6c0 5 3.4 8 7.5 9 4.1-1 7.5-4 7.5-9V6L12 3Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M12 3 4.5 6v6c0 5 3.4 8 7.5 9 4.1-1 7.5-4 7.5-9V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 12.3l2.1 2.1 4-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SupportNotice() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#F2F6EE_55%,#E1EAD7_100%)] p-6 text-center shadow-sm md:p-8">
        <div className="pointer-events-none absolute inset-0 raian-grain opacity-[0.05]" />
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3F4F2F,#6F7D4F)] shadow-md"
        >
          <ShieldIcon />
        </motion.div>
        <p className="relative mt-4 font-display text-2xl text-ink">¿Algún problema con tu producto?</p>
        <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
          Si has recibido un producto defectuoso, te falta algo en el pedido o tienes cualquier
          incidencia, escríbenos y lo resolvemos lo antes posible.
        </p>
        <motion.a
          href={`mailto:${siteConfig.email}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#3F4F2F,#6F7D4F)] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition"
        >
          Escribir a {siteConfig.email}
        </motion.a>
      </div>
    </Reveal>
  );
}
