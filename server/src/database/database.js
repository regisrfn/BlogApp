const mongoose = require('mongoose')
const store = require('./store')
mongoose.connect('mongodb://localhost/blog_app')

var blogSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    image:{ type: String, required: true},
    body:{ type: String, required: true},
    created: {type: Date, default:Date.now},
    dbLocation: { type: String, default: store.local}
})

var commentSchema = new mongoose.Schema({
    text: String,
    author: String
});

var Blog = mongoose.model("Blog", blogSchema)
var CommentDB = mongoose.model("Comment", commentSchema);

// // TEST
// Blog.create({
//     title: 'Test',
//     image: 'test',
//     body:'Test'
// })

module.exports.Blog = Blog
module.exports.Comment = CommentDB