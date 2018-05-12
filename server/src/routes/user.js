const express = require("express")
const router = express.Router()
const User = require("../database/user/user")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const checkAuth = require('../middleware/chechAuth')
const upload = require('../models/multer')
const cloudinary = require('../cloudinary/cloud')
const s3 = require('../API_S3/API')
var FormData = require('form-data')
var fs = require('fs')
//client.js
var io = require('socket.io-client')
var socket = io.connect(process.env.S3_API, {reconnect: true})

//CREATE
router.post('/', (req, res) => {
    User.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Email already exists"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            username: req.body.username,
                            password: hash
                        })
                        user
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })

})
//EDIT USER
router.put('/:id', upload.single('image'), checkAuth, async (req, res) => {
    var user = req.body
    const file = req.file
    const author = req.headers.user
    
    if (file) {       
        socket.on('progress', (data) => {
            console.log(data)
        })

        var buff = fs.readFileSync(file.path)  
        var base64Data = buff
        user = JSON.parse(req.body.user)
        // console.log('Image converted to base 64 is:\n\n' + base64data)
        try{
            // console.log(user)
            var oldImage = user.image
            var response = await s3.uploadImage({base64Data, file, oldImage})
            
            var image = {
                url: response.data.imageURL,
                public_id: response.data.id
            }
            
            user.image = image

        } catch (err) {
            console.log(err)
            return res.status(500).json({
                message: "Error uploading image"
            })
        }
        
    }
    // console.log(image)
    User.findById(author)
        .exec()
        .then(userFound => {
            if (userFound) {
                userFound.set(user)
                userFound.save()
                    .then((userEdited) => {
                        return res.status(200).json({
                            userEdited,
                            status: true
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                        return res.status(500).json({
                            status: false
                        })
                    })
            } else {
                return res.status(404).json({
                    status: false
                })
            }
        })
        .catch(err => {
            console.log(err)
            return res.status(404).json({
                message: "User not found"
            })
        })
})

//GET USER
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .select('-password')
        .exec()
        .then(user => {
            return res.status(200).json({
                user
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(404).json({
                message: "User not found"
            })
        })
})
//LOGIN
router.post('/login', (req, res) => {
    User.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Authentication failed"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Authentication failed"
                    })
                }
                if (result) {
                    const expiresInSeconds = 60 * 60
                    const token = jwt.sign({
                            email: user[0].email,
                            id: user[0]._id
                        },
                        "JWT_KEY", {
                            expiresIn: expiresInSeconds
                        }
                    )
                    return res.status(200).json({
                        message: "Auth successful",
                        status: true,
                        token: token,
                        expiresIn: expiresInSeconds,
                        username: user[0].username,
                        author: user[0]._id,
                    })
                }
                return res.status(401).json({
                    message: "Authentication failed"
                })
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(401).json({
                message: "Authentication failed"
            })
        })
})

//CREATE
router.post('/verify', (req, res) => {
    try {
        const token = req.headers.token
        const decoded = jwt.verify(token, 'JWT_KEY')
        return res.status(200).json({
            auth: true,
            message: "Auth success"
        })
    } catch (error) {
        res.status(401).json({
            auth: false,
            message: "Auth failed"
        })
    }
})
module.exports = router;