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
    
    createPost(){

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


