import mongoose from "mongoose";



const connectdb = async () =>{
    const db = process.env.MONGODB_URI;
    try {
        await mongoose.connect(db);
        console.log("Database connected!")
    } catch (e) {
        process.exit(1);
    }
}