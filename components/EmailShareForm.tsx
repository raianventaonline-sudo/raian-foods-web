"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";

type EmailShareFormProps = {
  title: string;
  url: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  subject?: string;
  bodyIntro?: string;
  className?: string;
};

const buildMailto = ({
  email,
  subject,
  body
}: {
  email: string;
  subject: string;
  body: string;
}) => `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export function EmailShareForm({
  title,
  url,
  heading = "¿Te gusta esta receta?",
  description = "Envíarsela por correo a quien tú quieras.",
  buttonLabel = "Enviar por correo",
  subject,
  bodyIntro = "Te comparto esta receta de RAIAN:",
  className = ""
}: EmailShareFormProps) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const recipient = email.trim();

    if (!recipient) {
      setStatus("Escribe un correo para preparar el envío.");
      return;
    }

    const body = `${bodyIntro}\n\n${title}\n${url}`;
    window.location.href = buildMailto({
      email: recipient,
      subject: subject ?? `Receta RAIAN: ${title}`,
      body
    });
    setStatus("Se abrirá tu aplicación de correo con la receta preparada.");
  };

  return (
    <section className={`raian-card rounded-md border border-line bg-white p-6 shadow-sm md:p-8 ${className}`}>
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl leading-tight text-ink">{heading}</h2>
        <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
      </div>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <div className="flex-1">
          <label htmlFor={inputId} className="sr-only">
            Correo electrónico
          </label>
          <input
            id={inputId}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="correo@ejemplo.com"
            className="min-h-12 w-full rounded-full border border-line bg-white px-5 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-olive focus:ring-2 focus:ring-olive/20"
          />
        </div>
        <button
          type="submit"
          className="raian-button-glow inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
        >
          {buttonLabel}
        </button>
      </form>
      {status ? <p className="mt-3 text-sm leading-6 text-muted">{status}</p> : null}
    </section>
  );
}
