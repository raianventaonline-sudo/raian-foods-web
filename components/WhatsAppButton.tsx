"use client";

import { siteConfig } from "@/data/site";

const DEFAULT_MESSAGE = "Hola, tengo una consulta sobre un producto de RAIAN Foods.";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105 hover:shadow-xl"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="white" aria-hidden>
        <path d="M16.004 3C9.376 3 4 8.373 4 14.997c0 2.5.73 4.83 2 6.78L4.5 28.5l6.92-1.82a12.92 12.92 0 0 0 4.58.83h.004c6.628 0 12.004-5.373 12.004-11.997C28.008 8.373 22.632 3 16.004 3Zm0 21.81h-.003a10.78 10.78 0 0 1-5.49-1.5l-.394-.234-4.105 1.08 1.096-3.997-.257-.41a10.79 10.79 0 0 1-1.654-5.752c0-5.96 4.85-10.81 10.81-10.81 2.887 0 5.6 1.125 7.642 3.168a10.74 10.74 0 0 1 3.166 7.645c0 5.96-4.85 10.81-10.81 10.81Zm5.93-8.1c-.325-.163-1.92-.946-2.218-1.054-.297-.108-.514-.163-.73.163-.217.325-.84 1.054-1.03 1.27-.19.217-.378.244-.703.082-.325-.163-1.372-.505-2.613-1.612-.966-.86-1.617-1.92-1.808-2.245-.19-.325-.02-.5.163-.668.163-.149.36-.387.54-.58.18-.196.24-.336.36-.56.12-.225.06-.42-.03-.583-.092-.163-.81-1.95-1.108-2.67-.293-.703-.59-.608-.81-.62l-.69-.013c-.217 0-.567.082-.866.408-.298.325-1.137 1.112-1.137 2.71 0 1.6 1.165 3.144 1.328 3.36.163.217 2.245 3.43 5.44 4.673 3.196 1.243 3.196.83 3.776.776.58-.054 1.92-.785 2.19-1.546.27-.76.27-1.41.19-1.546-.082-.136-.298-.217-.624-.38Z" />
      </svg>
    </a>
  );
}
