const mongoose = require('../models/mongoose')
var blogSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    image:{
        url: { type: String, required: true},
        public_id: { type: String, required: true}
    },
    body:{ type: String, required: true},
    created: {type: Date, default:Date.now},
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    meta: {
        newComments: {type: Number, default:0, required: true}
    }
})

var Blog = mongoose.model("Blog", blogSchema)
module.exports.Blog = Blog
