import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import morgan from "morgan";
import authRoute from "./routes/auth.router.js";
import userRoute from "./routes/user.router.js";
import connectdb from "./config/dbConnection.js";

import blogRoute from "./routes/blog.route.js"

//app
const app = express();

//Database
connectdb();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('tiny'));

//route
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);


const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is runnign on port ${port}`)
})