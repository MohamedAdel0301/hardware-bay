import NextAuth from "next-auth";
import { nextAuthEdgeConfig } from "./auth-edge";

export default NextAuth(nextAuthEdgeConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
