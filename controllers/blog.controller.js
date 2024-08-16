import Blog from "../models/blog.model.js";
import User from "../models/user.model.js"



export const getAllBlog = async (req, res) => {
    try {
        const blog = await Blog.find();
        return res.status(200).json(blog);
    } catch (e) {
        
    }
}

export const createBlog = async (req, res) => {
    try {
        const {title, description} = req.body;
        if(title == "" || description == ""){
            return res.status(200).json({message: "Title or Description must not be empty"});
        }

        const blog = new Blog({
            title,
            description
        });

        await blog.save();

        return res.status(201).json({message: "Blog created"});

    } catch (e) {
        return res.status(500).json({message: "Internal Server error!"});
    }
}

export const getBlog = async (req, res) =>{
    try {
        const id  = req.params.id;
        const post = await Blog.findById({_id: id});
        if(!post){
            return res.status(404).json({message: "Post not found!"})
        }
        return res.status(201).json(post)
    } catch (e) {
        return res.status(500).json({message: "Internal Server error!"});
    }
}

export const updatePost = async (req, res) =>{
    try {
        const id  = req.params.id;
        const {title, description} = req.body;
        const post = await Blog.findById({ _id: id });
        if(!post){
            return res.status(404).json({message: "Post not found!"})
        }

        const updatedPost = await Blog.findByIdAndUpdate(id, {title, description}, {new:true});
        return res.status(200).json({message: "Blog update succesfully!"});
    } catch (e) {
        return res.status(500).json({message: "Internal Server error!"});
    }
}
export const deletePost = async (req, res) =>{
    try {
        const id  = req.params.id;
        const {title, description} = req.body;
        const post = await Blog.findById(id);
        if(!post){
            return res.status(404).json({message: "Post not found!"})
        }

        const delatedPost = await Blog.findByIdAndDelete(id);
        return res.status(200).json({message: "Blog deleted succesfully!"});
    } catch (e) {
        return res.status(500).json({message: "Internal Server error!"});
    }
}