import express from 'express';

const route = express.Router();

route.get("/", (req, res)=>{
    console.log('User route');
});


export default route;