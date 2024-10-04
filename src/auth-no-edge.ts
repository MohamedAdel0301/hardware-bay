import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ZodLoginSchema } from "./types/auth-types";
import prisma from "../prisma/client";
import { nextAuthEdgeConfig } from "./auth-edge";

export const { handlers, signIn, auth, signOut } = NextAuth({
  ...nextAuthEdgeConfig,
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
} satisfies NextAuthConfig);
