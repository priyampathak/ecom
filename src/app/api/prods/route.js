import { connectionSrt } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "@/lib/Model/products";

export async function GET(){
    try{
        await mongoose.connect(connectionSrt);
        const data = await Product.find()
        console.log(data)
        return NextResponse.json({result : data});
    }
    catch(error){
        console.log("error occured", error)
        return NextResponse.json({error:'Error'})
    }
}