import Api from '../services/API'

export default {
  getAllBlogs () {
    return Api().get('blogs')
  },
  newBlog (newBlog) {
    return Api().post('blogs', newBlog)
  },
  getBlog (id) {
    return Api().get('blogs/' + id)
  },
  deleteBlog (id) {
    return Api().delete('blogs/' + id)
  },
  updateBlog (id, blog) {
    return Api().put('blogs/' + id, blog)
  },
  login (user) {
    return Api().post('user/login', user)
  },
  checkToken (token) {
    return Api().post('user/verify', token)
  }
}
