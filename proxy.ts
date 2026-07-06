import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// TEMPORARY: show the coming-soon holding page across the whole site while we
// refine it. Every page request is rewritten to /coming-soon (the URL stays the
// same for visitors). Static files, _next assets, the API, and the coming-soon
// page itself are excluded. To bring the full site back, delete this file.
export function proxy(request: NextRequest) {
  return NextResponse.rewrite(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/((?!_next|coming-soon|api|.*\\..*).*)"],
};
