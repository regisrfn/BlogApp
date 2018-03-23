const express = require("express")
const router = express.Router()
const User = require("../database/user/user")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

//CREATE
router.post('/', (req, res) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if(user.length >= 1) {
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
                        const user = new User ({
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
//LOGIN
router.post('/login', (req, res) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if(user.length < 1){
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
                if(result){
                    const token = jwt.sign(
                        {
                            email:user[0].email,
                            id:user[0]._id
                        }, 
                        "JWT_KEY",
                        {expiresIn: "1h"}
                    )
                    return res.status(200).json({
                        message: "Auth successful",
                        status: true,
                        token: token,
                        username:user[0].username,
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
        const decoded = jwt.verify(req.body.token, 'JWT_KEY')
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
