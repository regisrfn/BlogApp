const mongoose = require('../../models/mongoose')

var commentSchema = new mongoose.Schema({
    text:{ type: String, required: true},
    blog: {type: mongoose.Schema.Types.ObjectId, ref:'Blog', required: true},
    created: {type: Date, default:Date.now}, 
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true}, 
})


var Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment