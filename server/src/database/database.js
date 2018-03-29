const mongoose = require('mongoose')
const store = require('./store')
mongoose.connect('mongodb://localhost/blog_app')

var blogSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    image:{ type: String, required: true},
    body:{ type: String, required: true},
    created: {type: Date, default:Date.now},
    dbLocation: { type: String, default: store.local},
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    comments: [
        {type: mongoose.Schema.Types.ObjectId, ref:'Comment'}
    ]
})

var Blog = mongoose.model("Blog", blogSchema)
module.exports.Blog = Blog
