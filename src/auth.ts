import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ZodLoginSchema } from "./types/auth-types";
import prisma from "../prisma/client";

export const { handlers, signIn, auth, signOut } = NextAuth({
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      async authorize(credentials: unknown) {
        const validation = ZodLoginSchema.safeParse(credentials);
        if (!validation.success) {
          return null;
        }
        const { email, password } = validation.data;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) return null;
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword) return null;
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  callbacks: {
    //determine if user is authorized on a given request
    //use auth to check on the session
    authorized: ({ auth, request }) => {
      //return false on disallowed requests
      return true;
    },
    redirect: async ({ url, baseUrl }) => {
      return baseUrl;
    },
  },
} satisfies NextAuthConfig);
