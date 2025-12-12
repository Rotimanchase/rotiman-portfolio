import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // match ALL routes EXCEPT static files
    "/",                      // root
    "/api/(.*)",              // all API routes
  ],
};
