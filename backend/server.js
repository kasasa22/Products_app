import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js'; 

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Database Connection
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");

    // Only start the server after DB connection
    app.listen(5000, () => {
      console.log("Server started at port 5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  });

// Route to create a new product
app.post('/products', async (req, res) => {
    const product = req.body;

    // Validate the required fields
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    // Create a new instance of the Product model
    const newProduct = new Product(product);

    try {
        // Save the new product to the database
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});
