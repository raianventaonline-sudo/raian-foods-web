import { NextResponse, type NextRequest } from "next/server";
import { qrLinks } from "@/data/qr-links";

export const dynamic = "force-dynamic";

type QrRedirectRouteProps = {
  params: {
    code: string;
  };
};

export function GET(request: NextRequest, { params }: QrRedirectRouteProps) {
  const qrLink = qrLinks[params.code];

  if (!qrLink) {
    return NextResponse.redirect(new URL("/productos", request.url), {
      status: 307,
      headers: {
        "Cache-Control": "no-store"
      }
    });
  }

  const target = new URL(qrLink.targetPath, request.url);
  target.searchParams.set("ref", "qr");

  return NextResponse.redirect(target, {
    status: 307,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

