import Link from "next/link";

const inputClasses =
  "mt-2 min-h-12 w-full rounded-md border border-line bg-cream px-4 text-base text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20";

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xgodkqwo"
      method="POST"
      className="rounded-md border border-line bg-white p-5 shadow-sm md:p-7"
    >
      <input type="hidden" name="_subject" value="[RAIAN] Nueva consulta desde la web" />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink">
            Nombre
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="block text-sm font-semibold text-ink">
          Asunto
        </label>
        <input id="subject" name="subject" type="text" required className={inputClasses} />
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
          className="mt-2 w-full rounded-md border border-line bg-cream px-4 py-3 text-base text-ink outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
        />
      </div>

      <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          id="privacy"
          type="checkbox"
          name="privacy"
          value="Aceptada"
          required
          className="mt-1 size-5 rounded border-line text-olive focus:ring-olive"
        />
        <label htmlFor="privacy">
          He leido y acepto la{" "}
          <Link
            href="/privacidad"
            className="font-semibold text-olive underline underline-offset-4 transition hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
          >
            politica de privacidad
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-olive focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 sm:w-auto"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
