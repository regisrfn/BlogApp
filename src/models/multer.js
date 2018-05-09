const multer  = require('multer')
var path = require('path')
const storage = multer.diskStorage({
    // destination:  function (req, file, cb) {
    //     cb(null, './uploads')
    // },
    filename:  function (req, file, cb) {
        var user = req.headers.user
        cb(null, file.fieldname + '-' + Date.now())
    }

})

module.exports = multer({storage})