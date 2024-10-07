import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config()

const app = express();

app.post('/products' , async(req,res)=>{
    const product = req.body;

    if (!product.name || )=>{

    }

   
})

app.listen(5000, ()=>{
    connectDB();
    console.log ('server started at port 5000')
});

  