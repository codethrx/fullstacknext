import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../libs/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
