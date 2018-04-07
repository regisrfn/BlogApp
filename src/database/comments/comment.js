const mongoose = require('../../models/mongoose')

var commentSchema = new mongoose.Schema({
    text:{ type: String, required: true}, 
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true}, 
})


var Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment