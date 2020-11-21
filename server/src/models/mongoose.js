const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_API || 'mongodb://localhost/blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify: false
})

module.exports = mongoose
