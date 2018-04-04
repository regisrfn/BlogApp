const mongoose = require('mongoose')
const store = require('../store')
mongoose.connect('mongodb://database_blog:acesso45@ds054999.mlab.com:54999/database_blog')

var userSchema = new mongoose.Schema({
    email:{ type: String, required: true},
    password:{ type: String, required: true, unique: true},
    username:{ type: String, required: true, unique: true}    
})


var User = mongoose.model("User", userSchema)

module.exports = User