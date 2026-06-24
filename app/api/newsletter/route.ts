import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const consent = body?.consent === true;

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Introduce un email válido." }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: "Debes aceptar la política de privacidad." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    console.error("Newsletter: faltan BREVO_API_KEY o BREVO_LIST_ID en las variables de entorno.");
    return NextResponse.json({ error: "El servicio de newsletter no está disponible ahora mismo." }, { status: 503 });
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true
    })
  });

  if (response.ok || response.status === 204) {
    return NextResponse.json({ ok: true });
  }

  const errorBody = await response.json().catch(() => null);

  if (errorBody?.code === "duplicate_parameter") {
    return NextResponse.json({ ok: true, alreadySubscribed: true });
  }

  console.error("Newsletter: error al crear el contacto en Brevo.", errorBody);
  return NextResponse.json({ error: "No se ha podido completar la suscripción. Inténtalo de nuevo." }, { status: 502 });
}
