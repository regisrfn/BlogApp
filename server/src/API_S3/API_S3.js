var axios = require('axios')

module.exports =  () => {
    return axios.create({
        baseURL: process.env.S3_API
    })
}
