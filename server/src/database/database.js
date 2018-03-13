const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_app')

var blogSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    image:{ type: String, required: true},
    body:{ type: String, required: true},
    created: {type: Date, default:Date.now},
    dbLocation: { type: String, default: 'http://localhost:8081/'}
})

var Blog = mongoose.model("Blog", blogSchema)

// // TEST
// Blog.create({
//     title: 'Test',
//     image: 'test',
//     body:'Test'
// })

module.exports.Blog = Blog