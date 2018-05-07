var API = require('./API_S3')

module.exports =  {
    uploadImage(data){
        return API().post('/upload', data)
    }
}