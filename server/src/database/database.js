const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_app')

var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created: {type: Date, default:Date.now}
})

var Blog = mongoose.model("Blog", blogSchema)

// // TEST
// Blog.create({
//     title: 'Test',
//     image: 'test',
//     body:'Test'
// })

module.exports.Blog = Blog