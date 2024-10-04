import { NextAuthConfig } from "next-auth";

export const nextAuthEdgeConfig = {
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    authorized: ({ auth, request }) => {
      return true;
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
  secret: process.env.SECRET,
  providers: [],
} satisfies NextAuthConfig;
