import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/products.routes.js';

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

app.use('/api/products', productRoutes )

const PORT = process.env.PORT || 5000;

// Database Connection
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");

    // Only start the server after DB connection
    app.listen(PORT, () => {
      console.log("Server started at port 5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  });

 