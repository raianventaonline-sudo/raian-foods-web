"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent })
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error ?? "No se ha podido completar la suscripción.");
        return;
      }

      setStatus("success");
      setMessage(data?.alreadySubscribed ? "Ya estabas suscrito a nuestro boletín." : "¡Listo! Ya estás suscrito a nuestro boletín.");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage("No se ha podido completar la suscripción. Inténtalo de nuevo.");
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-[linear-gradient(120deg,#F4DECF_0%,#EDE6D6_100%)] p-6 md:p-8">
      <h2 className="font-display text-2xl text-ink">Recibe novedades de RAIAN</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted">
        Nuevos productos, recetas y contenido de ayuda directamente en tu correo. Sin spam, puedes darte de baja cuando
        quieras.
      </p>

      {status === "success" ? (
        <p className="mt-5 rounded-md bg-white px-4 py-3 text-sm font-semibold text-olive">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="tu@email.com"
              aria-label="Email"
              className="min-h-12 w-full rounded-full border border-line bg-white px-5 text-base text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20 sm:max-w-xs"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-olive disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Suscribirme"}
            </button>
          </div>

          <div className="mt-3 flex items-start gap-3 text-xs leading-5 text-muted">
            <input
              id="newsletter-consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-0.5 size-4 rounded border-line text-olive focus:ring-olive"
            />
            <label htmlFor="newsletter-consent">
              Acepto recibir el boletín de RAIAN por email y he leído la{" "}
              <Link href="/privacidad" prefetch={false} className="font-semibold underline hover:text-olive">
                política de privacidad
              </Link>
              .
            </label>
          </div>

          {status === "error" && message ? <p className="mt-3 text-sm font-semibold text-terracotta">{message}</p> : null}
        </form>
      )}
    </div>
  );
}
