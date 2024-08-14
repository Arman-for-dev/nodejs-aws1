import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import morgan from "morgan";

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('tiny'));


const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is runnign on port ${port}`)
})