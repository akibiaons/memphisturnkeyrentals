import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // For debugging purposes, skip token verification
  return NextResponse.next();
}

export const config = {
  matcher: ["/listings/:path*"],
};
