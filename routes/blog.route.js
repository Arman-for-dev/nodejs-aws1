import express from 'express';
import { createBlog, deletePost, getAllBlog, getBlog, updatePost } from '../controllers/blog.controller.js';


const route = express.Router();



route.get('/', getAllBlog);
route.post('/create', createBlog);
route.get('/:id', getBlog);
route.put('/update/:id', updatePost);
route.delete('/delete/:id', deletePost);

export default route;