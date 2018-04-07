const mongoose = require('mongoose')
const store = require('./store')
// mongoose.connect('mongodb://localhost/blog_app')
mongoose.connect('mongodb://database_blog:acesso45@ds054999.mlab.com:54999/database_blog')

var imageSchema = new mongoose.Schema({
    public_id: { type: String, required: true},
    version: { type: String, required: true},
    signature: { type: String, required: true},
    width:{ type: String, required: true},
    height:{ type: String, required: true},
    format:{ type: String, required: true},
    resource_type:{ type: String, required: true},
    created_at:{ type: String, required: true},
    bytes:{ type: String, required: true},
    type:{ type: String, required: true},
    url:{ type: String, required: true},
    secure_url:{ type: String, required: true},
})

var image = mongoose.model("Image", imageSchema)
module.exports = image
