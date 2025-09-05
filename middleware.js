import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // Redirect to login if no token
  if (!token) {
    if (req.nextUrl.pathname.startsWith("/admin") && !req.nextUrl.pathname.startsWith("/admin/login")) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    return NextResponse.next();
  }

  try {
    await verifyToken(token); // ✅ decode/verify JWT
    return NextResponse.next();
  } catch (err) {
    console.error("Invalid token:", err.message);
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"], // applies to all admin routes
};
