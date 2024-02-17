import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { connectionSrt } from "@/lib/db";
import { User } from "@/lib/Model/users";
import { redirect } from "next/dist/server/api-utils";



export const authoptions = {
   
  session: {
    strategy: 'jwt'
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        if (!credentials || !email || !password) {
          console.log("Enter credentials");
          return null;
        }

        await mongoose.connect(connectionSrt, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        const user = await User.findOne({ email: email });

        if (!user) {
            console.log("No user found");
            return null
          }

        const fn = user.first_name
        const ln = user.last_name
        const id = user._id.toString()

        

        if (user && user.password === password) {
          console.log("User details are - ", user);
          return {
            first_name: fn,
            name:fn,
            email: user.email,
            id: id.toString()
          };
        } else {
          console.log("No user found");
          return null;
        }
      },
    }),
  ],

  callbacks: {
      async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id
            console.log("user is", session.user)
   

            return session
          }
  }
};

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };
