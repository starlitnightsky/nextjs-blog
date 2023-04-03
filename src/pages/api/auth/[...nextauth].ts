import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "../../../../db/connectDb/connectDb";
import User from "../../../../db/schema/User";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../db/dbPromiseForAuth/promiseForAuth";

interface UserData {
  email: string;
  role: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

interface ErrorData {
  message: string;
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // console.log(credentials);
        // connect to the DB and find the user
        await connectDb();
        // use user static login method

        //@ts-ignore

        let user: any;
        user = await User.login(
          credentials?.email as string,
          credentials?.password as string
        );

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user, token }) {
      const { _doc } = token;
      const { password, ...userData } = _doc as UserData;
      session.user = userData;

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      const newToken = { ...token };
      const newUser = { ...user };
      console.log(token);
      return { ...newToken, ...newUser };
    },
  },

  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
