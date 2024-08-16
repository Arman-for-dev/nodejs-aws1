import mongoose, { model, Schema } from "mongoose";



const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique: true,
        min: 25
    },
    description:{
        type:String
    }
},{
    timestamps:true
});

const Blog = model("Blog", blogSchema);

export default Blog;
