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
const commentsDB = require('./database/comments/comment')
const cloudinary = require('./cloudinary/cloud')
const app = express()
const blogDB = database.Blog

var http = require('http')
var socketIO = require('socket.io')
var server = http.createServer(app)
var io = socketIO(server)

// io.on('connection', (socket) => {
//     console.log("User connected")
// })

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.use('/user', userRoutes)

app.get('/blogs', function (req, res) {
    blogDB.find()
    .sort({created:-1})
    .populate('author', 'username')
    .exec()
    .then(blogs => {
        return res.status(200).json({
            status: true,
            blogs
        })
    })
    .catch(error => {
        return res.status(404).json({
            status: false,
            error
        })
    })

})
// CREATE
app.post('/blogs', upload.single('blogImage'), checkAuth, function (req, res) {
    const blog = {
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        comments:req.body.comment
    }
    
    try {
        cloudinary.uploader.upload(req.file.path, function(result) { 
            var image = {
                url: result.secure_url,
                public_id: result.public_id
            }
            console.log(image.url)
            blog.image = image
            blogDB.create(blog)
                .then((blogs) => {
                    blogDB.find()
                            .sort({created:-1})
                            .populate('author', 'username')
                            .then((blogs) => io.sockets.emit('newBlog',blogs))
                    return res.status(200).json({
                        status: true,
                    })
                })
                .catch((error) => {
                    return res.status(500).json({
                        status: false,
                    })
                })
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: false,
        })
    }
    
    
})

app.get("/blogs/:id", function(req, res) {

    blogDB.findById(req.params.id)
        .populate('author', 'username')
        .exec()
        .then(blog => {
            if(blog){
                return res.status(200).json({
                    blog,
                    status: true,
                })
            } else {
                return res.status(404).json({
                    status: false,
                })
            } 
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                error,
            })
        })
})

// EDIT
app.put("/blogs/:id", upload.single('blogImage'), checkAuth, function(req, res) {
    const blog = {
        title: req.body.title,
        body: req.body.body
    }
    const file = req.file
    if (file) {
        try {
            cloudinary.uploader.upload(req.file.path, function(result) { 
                var image = {
                    url: result.secure_url,
                    public_id: result.public_id
                }
                blog.image = image
                blogDB.findOneAndUpdate({author:req.headers.user, _id:req.params.id}, blog)
                    .exec()
                    .then(blog => {
                        if(blog){
                            blogDB.find()
                                .sort({created:-1})
                                .populate('author', 'username')
                                .then((blogs) => io.sockets.emit('newBlog',blogs))
                            blogDB.findById(req.params.id)
                                .populate('author', 'username')
                                .then((blog) => io.sockets.emit('modifiedBlog',blog))
                            // DELETING FILE FROM CLOUDINARY
                            cloudinary.uploader.destroy(blog.image.public_id,
                            {invalidate: true }, function(error, result) {console.log(result)})
                            return res.status(200).json({
                                status: true,
                            })
                        } else {
                            console.log(error)
                            return res.status(404).json({
                                status: false,
                            })
                        }            
                    })
                    .catch((error) => {
                        console.log(error)
                        return res.status(500).json({
                            status: false,
                            error,
                        })
                    })
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: false,
            })
        }
    } else {
        blogDB.findOneAndUpdate({author:req.headers.user, _id:req.params.id}, blog)
        .exec()
        .then(blog => {
            if(blog){
                blogDB.find()
                    .sort({created:-1})
                    .populate('author', 'username')
                    .then((blogs) => io.sockets.emit('newBlog',blogs))
                blogDB.findById(req.params.id)
                    .populate('author', 'username')
                    .then((blog) => io.sockets.emit('modifiedBlog',blog))
                return res.status(200).json({
                    status: true,
                })
            } else {
                console.log(error)
                return res.status(404).json({
                    status: false,
                })
            }            
        })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({
                status: false,
                error,
            })
        })  
    }
    
})

// CREATE COMMENT
app.post("/blogs/:id/comments", checkAuth, function(req, res) {
    blogDB.findById(req.params.id)
        .exec()
        .then(blog => {
            if(blog){
                var comment = req.body.comment
                comment.blog = blog._id
                commentsDB.create(comment)
                    .then( () => {
                        commentsDB.find({blog:req.params.id})
                            .sort({created:-1})
                            .populate('author', 'username')
                            .then((comments) => io.sockets.emit('createdComment',comments))
                        return res.status(200).json({
                            status: true,
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
                    status: false,
                })
            }            
        })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({
                status: false,
                error,
            })
        })
    
})

// GET COMMENT
app.get("/blogs/:id/comments", function(req, res) {
    blogDB.findById(req.params.id)
        .exec()
        .then(blog => {
            if(blog){
                commentsDB.find({blog:req.params.id})
                    .sort({created:-1})
                    .populate('author', 'username')
                    .exec()
                    .then( (comments) => {
                        return res.status(200).json({
                            comments,
                            status: true,
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
                    status: false,
                })
            }            
        })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({
                status: false
            })
        })
    
})
// delete comment
app.delete("/blogs/:id/comments/:idComment", checkAuth, function(req, res) {
    commentsDB.findOneAndRemove({author:req.headers.user, blog:req.params.id, _id:req.params.idComment})
        .exec()
        .then(() => {
            commentsDB.find({blog:req.params.id})
                            .sort({created:-1})
                            .populate('author', 'username')
                            .then((comments) => io.sockets.emit('deletedComment',comments))
            return res.status(200).json({
                status: true
            })
        })
        .catch((error) => {
            console.log(error)
            return res.status(404).json({
                status: false
            })
        })
})

// delete
app.delete("/blogs/:id", checkAuth, function(req, res) {
    blogDB.findOneAndRemove({author:req.headers.user, _id:req.params.id})
        .exec()
        .then(blog => {
            commentsDB.deleteMany({blog:req.params.id}).then()
            // DELETING FILE FROM CLOUDINARY
            cloudinary.uploader.destroy(blog.image.public_id,
                {invalidate: true }, function(error, result) {console.log(result)})
            if(blog) {
                blogDB.find()
                    .sort({created:-1})
                    .populate('author', 'username')
                    .then((blogs) => io.sockets.emit('newBlog',blogs))
                return res.status(200).json({
                    status: true,
                })
            } else {
                return res.send({
                    status: false,
                    message: "User can't delete this blog"
                })
            }
            
        })
        .catch((error) => {
            console.log(error)
            return res.status(500).json({
                status: false,
                error,
            })
        })
})

server.listen(process.env.PORT || 8081 , function () {
    console.log('SERVER IS RUNNING');    
})
