import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const config = {
  matcher: ["/admin/:path", "/api/blog/:path"],
};

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;

  if (!user || !pass) {
    return new NextResponse("Admin is not configured (missing env vars).", {
      status: 500,
    });
  }

  if (authHeader && authHeader.startsWith("Basic ")) {
    try {
      const base64 = authHeader.slice(6);
      const decoded = atob(base64);
      const [u, p] = decoded.split(":");

      if (u === user && p === pass) {
        return NextResponse.next();
      }
    } catch {}
  }

  const res = new NextResponse("Authentication required", { status: 401 });
  res.headers.set("WWW-Authenticate", 'Basic realm="Admin Area');
  return res;
}
