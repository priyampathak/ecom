import mongoose from "mongoose";
const productModel = new mongoose.Schema({
    name:String,
    discription:String,
    price:String,
    img:String,
    size:{
        6:String,
        7:String,
        8:String,
        9:String
    }
})

export const Product = mongoose.model.products || mongoose.model("products", productModel)