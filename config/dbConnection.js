import mongoose, { connect } from "mongoose";


const connectDB = async () =>{
    try {
        const db = process.env.MONGODB_URI
        await connect(db);
        console.log('Database connected!');
    } catch (e) {
        console.log(e);
    }
}

export default connectDB;