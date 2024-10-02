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
      async authorize(credentials: Record<string, unknown>) {
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
        if (!user) {
          return null;
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
          return null;
        }

        return user;
      },
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  callbacks: {
    authorized: ({ auth, request }) => {
      return true;
    },
    redirect: async ({ url, baseUrl }) => {
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig);
