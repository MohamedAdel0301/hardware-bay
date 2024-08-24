import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(credentials);
        return null;
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
  },
} satisfies NextAuthConfig);
