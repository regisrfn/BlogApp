const multer  = require('multer')
var path = require('path')
const storage = multer.diskStorage({
    // destination:  function (req, file, cb) {
    //     cb(null, './uploads')
    // },
    filename:  function (req, file, cb) {
        var user = req.headers.user
        cb(null, user + path.extname(file.originalname))
    }

})

module.exports = multer({storage})