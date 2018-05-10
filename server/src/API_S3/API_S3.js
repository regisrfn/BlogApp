var axios = require('axios')
require('dotenv').config()

module.exports =  () => {
    return axios.create({
        baseURL: process.env.S3_API
    })
}
