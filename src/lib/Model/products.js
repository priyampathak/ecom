import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    img: String,
    size: {
        "6": String,
        "7": String,
        "8": String,
        "9": String
    }
});

// Define the model named "Product"
const Product = mongoose.models.products || mongoose.model("products", productSchema);

export { Product }; // Export the Product model
