import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const locale = request.nextUrl.pathname.startsWith("/en") ? "en" : "es";
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  // Solo rutas de página — excluye estáticos, imágenes, API, QR redirects, sitemap y robots
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|icon|apple-icon|images|videos|documents|api/|qr/|robots\\.txt|sitemap\\.xml|\\.well-known).+)"
  ]
};
