import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isFinanceRoute = createRouteMatcher(["/dashboard/finance/(.*)"]);
const isLawyersRoute = createRouteMatcher(["/dashboard/lawyers/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims } = await auth();

  const userRole =
    (
      sessionClaims?.metadata as {
        userType: "Finance" | "Lawyer";
      }
    )?.userType || "Lawyer";

  if (isFinanceRoute(req) && userRole !== "Finance") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isLawyersRoute(req) && userRole !== "Lawyer") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
