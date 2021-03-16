import {Response, Request, Router} from "express";
import Post from "../models/Post.Models"

class PostRoutes{
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    
    async getPosts(req: Request, res:Response){
        const posts = await Post.find();
        res.json(posts);
    }

    getPost(){

    }
    
    async createPost(req: Request, res:Response){
        console.log(req.body);
        const {title, url, content, image} = req.body;
        const newPost = new Post({title, url, content, image})
        await newPost.save();
        res.json({data: newPost});
    }

    updatePost(){


    }

    deletePost(){

    }

    routes(){
        this.router.get("/", this.getPosts)
        this.router.get("/:/url",this.getPost)
        this.router.post("/", this.createPost);
        this.router.put("/:/url",this.updatePost)
        this.router.delete("/:/url", this.deletePost)
    }
}
const postRoutes = new PostRoutes();

export default postRoutes.router;


