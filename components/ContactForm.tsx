"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type FormState = "idle" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const acceptedPrivacy = formData.get("privacy") === "on";

    if (!acceptedPrivacy) {
      setState("error");
      return;
    }

    // Conectar aquí el envío real cuando se defina backend, API route o proveedor externo.
    setState("sent");
    form.reset();
  }

  return (
    <form className="rounded-lg border border-line bg-white p-5 shadow-sm md:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 min-h-12 w-full rounded-lg border border-line bg-cream px-4 text-base text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 min-h-12 w-full rounded-lg border border-line bg-cream px-4 text-base text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="block text-sm font-semibold text-ink">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-2 min-h-12 w-full rounded-lg border border-line bg-cream px-4 text-base text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-lg border border-line bg-cream px-4 py-3 text-base text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
        />
      </div>

      <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          id="privacy"
          type="checkbox"
          name="privacy"
          required
          className="mt-1 size-5 rounded border-line text-olive focus:ring-olive"
        />
        <label htmlFor="privacy">
          He leído y acepto la{" "}
          <Link
            href="/privacidad"
            className="font-semibold text-olive underline underline-offset-4 transition hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
          >
            política de privacidad
          </Link>
          .
        </label>
      </div>

      {state === "sent" ? (
        <p className="mt-4 rounded-lg bg-olive/10 px-4 py-3 text-sm font-semibold text-olive">
          Formulario preparado. El envío real está pendiente de conexión.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="mt-4 rounded-lg bg-terracotta/10 px-4 py-3 text-sm font-semibold text-terracotta">
          Debes aceptar la política de privacidad para enviar el formulario.
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-olive px-6 text-sm font-semibold text-white transition hover:bg-[#5F6C43] focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 sm:w-auto"
      >
        Enviar consulta
      </button>
    </form>
  );
}
