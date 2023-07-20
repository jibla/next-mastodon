import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && (path === "/" || path === "/protected")) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && path === "/login") {
    return NextResponse.redirect(new URL("/protected", req.url));
  }
  return NextResponse.next();
}
