"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true, lowercase: true },
    Contente: { type: String },
    Imgage: { type: String, required: true },
    CreatedAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date }
});
exports.default = mongoose_1.model("Post", PostSchema);
