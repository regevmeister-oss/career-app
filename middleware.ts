import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });

  const url = req.nextUrl;

  // משתמש מחובר ? הולך לדשבורד
  if (token && url.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // משתמש לא מחובר ? לא יכול להיכנס לדשבורד
  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
