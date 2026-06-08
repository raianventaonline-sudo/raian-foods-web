import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const locale = request.nextUrl.pathname.startsWith("/en") ? "en" : "es";
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|icon|apple-icon|images|robots|sitemap).*)"]
};
