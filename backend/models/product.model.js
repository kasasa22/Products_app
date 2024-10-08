import mongoose from "mongoose";

// Define the schema
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
    },
    {
        timestamps: true, 
    }
);

// Create the model
const Product = mongoose.model('Product', productSchema);

// Export the model
export default Product;
