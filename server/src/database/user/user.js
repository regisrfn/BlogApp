const mongoose = require('../../models/mongoose')
var userSchema = new mongoose.Schema({
    email:{ type: String, required: true},
    image:{
        url: { type: String, default:'https://res.cloudinary.com/dfssvmoxl/image/upload/v1524490514/greyson-joralemon-257251-unsplash.jpg', required: true},
        public_id: { type: String, default:'greyson-joralemon-257251-unsplash',required: true}
    },
    description:{ type: String, default:''},
    created: {type: Date, default:Date.now},
    friends: [
        {type: mongoose.Schema.Types.ObjectId, ref:'User'}
    ],
    password:{ type: String, required: true, unique: true},
    username:{ type: String, required: true, unique: true},
    firstName:{ type: String, default:''},
    lastName:{ type: String, default:''},
    city:{ type: String, default:''},
    country:{ type: String, default:''},
    birthday:{ type: String, default:''},
    phone:{ type: String, default:''},
    interests:{ type: String, default:''},
    website:{ type: String, default:''}  
})


var User = mongoose.model("User", userSchema)

module.exports = User