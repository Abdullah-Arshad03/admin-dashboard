import clientPromise from "@/app/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials";
import { User } from "@/app/lib/userModel";
import * as bcrypt from 'bcrypt'
import { connection } from "@/app/lib/util";

export const authOptions: NextAuthOptions= {
    adapter : MongoDBAdapter(clientPromise),
    providers : [
        Credentials({
            name : 'Credentials',
            credentials : {
                email : {label : "Email" , type : 'email' , placeholder :'Enter your Email'},
                password : {label : "Password" , type : 'password' , placeholder : 'Password'},
                
                  
            },
            async authorize(credentials, req) {
      connection()
                // we have to check wheater these two things exist, if not exist then return the null. 
                if(!credentials?.email || !credentials?.password) return 
               
                const user = await User.findOne({email : credentials?.email})
                if(!user) return
console.log('this is user in the next route : ', user)
                const passMatch = await bcrypt.compare(credentials?.password , user.password)
          console.log('pass Match ', passMatch)
                if(!passMatch){
                    return null 
                }

                return user
            },

        }),
         GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET!
         })
    ],
    session : {
        strategy : 'jwt'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}

