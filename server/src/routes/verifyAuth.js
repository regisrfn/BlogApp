const express = require("express")
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/checkAuth', (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.token, 'JWT_KEY')
        return res.status(200).json({
            status: true
        })        
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        })       
    }
})

module.exports = router