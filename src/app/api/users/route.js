import { connectionSrt } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { User } from "@/lib/Model/users";

export async function GET(){
      try{
            await mongoose.connect(connectionSrt);
            const data = await User.find()

            return NextResponse.json({result : data});
      }
      catch(error){
            console.log("error occured", error)
            return NextResponse.json({error: 'Error'})
      }
}