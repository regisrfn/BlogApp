const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const database = require('./database/database')
const fs = require('fs')
const path = require('path')
const upload = require('./models/multer')
const userRoutes = require('./routes/user')
const checkAuth = require('./middleware/chechAuth')

const app = express()
const blogDB = database.Blog


app.use('/uploads', express.static('uploads'))
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.use('/user', userRoutes)

app.get('/blogs', function (req, res) {
    blogDB.find({}, function (error, blogs) {
        if (error) {
            res.send({error})
        }else {
            res.send({blogs})
        }
    })
})

app.post('/blogs', upload.single('blogImage'), checkAuth, function (req, res) {
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
app.put("/blogs/:id", upload.single('blogImage'), function(req, res) {
    const blog = {
        title: req.body.title,
        body: req.body.body
    }
    const file = req.file
    if (file) {
        blog.image = req.file.path
    }
    blogDB.findByIdAndUpdate(req.params.id , blog ,function (error, blog) {
        if(error){
            res.send({error})
        }else {
            res.send({status: true})
        }
    })
})

// delete
app.delete("/blogs/:id", function(req, res) {
    blogDB.findByIdAndRemove(req.params.id ,function (error, blog) {
        if(error){
            res.send({error})
        }else {
            fs.unlink(path.join(__dirname,'../' + blog.image), (err) => {
                if (err) throw err;
                console.log('successfully deleted '+ blog.image);
            })
            res.send({status: true})
        }
    })
})

app.listen(process.env.PORT || 8081 , function () {
    console.log('SERVER IS RUNNING');    
})
