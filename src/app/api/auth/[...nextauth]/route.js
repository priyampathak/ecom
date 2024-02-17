import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { connectionSrt } from "@/lib/db";
import { User } from "@/lib/Model/users";

export const authoptions = {
      session: {
            strategy: 'jwt'
      },

      providers: [
            CredentialsProvider({
            name: "creds",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {

                  const { email, password } = credentials;// destructing the email and password i.e, taking user input values and storing it to a variable
      
      
                  if (!credentials || !email || !password) {
                  console.log("Enter cread");
                  return null;
                  }

                  await mongoose.connect(connectionSrt, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        });

                  const userr = await User.findOne({email: email});

                  if(userr && userr.password === password){
                        console.log("User deatils are - ", userr.email, userr.first_name)
                        return {name:userr.first_name};
                  }else{
                        console.log("no user found")
                        return null
                  }
            },
      }),
      ],

      callbacks: {
            async redirect({ url, baseUrl }) {
            console.log("Redirecting to /home");
            return `/`;
            },
        },
     
};
const handler = NextAuth(authoptions);
export {handler as GET, handler as POST}
