const mongoose = require('mongoose')
const store = require('../store')
mongoose.connect('mongodb://localhost/blog_app')

var userSchema = new mongoose.Schema({
    email:{ type: String, required: true},
    password:{ type: String, required: true, unique: true},
    username:{ type: String, required: true, unique: true}    
})


var User = mongoose.model("User", userSchema)

module.exports = User