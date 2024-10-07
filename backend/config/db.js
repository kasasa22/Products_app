import mongoose from "mongoose";


export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo db connecte: ${conn.connection.port}')
    } catch (error) {
        console.error('error: ${error.message}')
        process.exit(1)
        
    }
}