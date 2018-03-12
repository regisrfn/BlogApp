const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const database = require('./database/database')

const multer  = require('multer')
const storage = multer.diskStorage({
    destination:  function (req, file, cb) {
        cb(null, './uploads')
    },
    filename:  function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }

})
const upload = multer({storage})

const app = express()
const blogDB = database.Blog

app.use('/uploads', express.static('uploads'))
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/blogs', function (req, res) {
    blogDB.find({}, function (error, blogs) {
        if (error) {
            res.send({error})
        }else {
            res.send({blogs})
        }
    })
})

app.post('/blogs', upload.single('blogImage'), function (req, res) {
    const blog = {
        title: req.body.title,
        body: req.body.body
    }

    const file = req.file
    blog.image = req.file.path
    
    blogDB.create(blog, function (error, blogs) {
        if (error) {
            res.send({error})
        }else {
            res.send({status:true})
        }
    })
})

app.get("/blogs/:id", function(req, res) {

    blogDB.findById(req.params.id , function (error, blog) {
        if(error){
            res.send({error})
        }else {
            res.send({blog})
        }
    })
})

// EDIT
app.put("/blogs/:id", function(req, res) {
    blogDB.findByIdAndUpdate(req.params.id , req.body.blog ,function (error, blog) {
        if(error){
            res.send({error})
        }else {
            res.send({status: true})
        }
    })
})

// delete
// EDIT
app.delete("/blogs/:id", function(req, res) {
    blogDB.findByIdAndRemove(req.params.id ,function (error, blog) {
        if(error){
            res.send({error})
        }else {
            res.send({status: true})
        }
    })
})

app.listen(process.env.PORT || 8081 , function () {
    console.log('SERVER IS RUNNING');    
})
