const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    console.log(req.body)
    try {
        token = req.headers.token
        console.log(token)
        const decoded = jwt.verify(token, 'JWT_KEY')
        req.userData = decoded
        next()        
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        })       
    }
}