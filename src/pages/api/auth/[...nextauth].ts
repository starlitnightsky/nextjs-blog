import NextAuth from "next-auth";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "../../../../db/connectDb/connectDb";
import User from "../../../../db/schema/User";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../db/dbPromiseForAuth/promiseForAuth";

interface UserData {
  email: string;
  role: string;
}

interface ErrorData {
  message: string;
}

export default NextAuth({
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

        let user: undefined | UserData;

        user = await User.login(credentials?.email, credentials?.password);

        return user;
      },
    }),
  ],
  pages: {
    // signIn: "/login",
  },
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
