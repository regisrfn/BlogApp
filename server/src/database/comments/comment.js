const mongoose = require('mongoose')
mongoose.connect('mongodb://database_blog:acesso45@ds054999.mlab.com:54999/database_blog')

var commentSchema = new mongoose.Schema({
    text:{ type: String, required: true}, 
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true}, 
})


var Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment