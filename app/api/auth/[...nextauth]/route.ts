import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isValid) throw new Error("Wrong password");

        return {
          id: user.id,
          email: user.email,
          isPro: user.isPro,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isPro = user.isPro;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.isPro = token.isPro as boolean;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };