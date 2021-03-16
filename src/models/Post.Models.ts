import {Schema, model} from "mongoose";

const PostSchema = new Schema({
    title: {type: String, required: true},
    url: {type:String, required:true, unique:true, lowercase:true},
    Contente:{type:String},
    Imgage:{type:String, required:true},
    CreatedAt:{type:Date, default: Date.now},
    UpdateAt: {type: Date}
})

export default model("Post", PostSchema);