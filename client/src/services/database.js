import Api from '../services/API'

export default {
  getAllBlogs (data) {
    console.log(data)
    return Api().get('blogs', {params: data})
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
  signup (user) {
    return Api().post('user', user)
  },
  checkToken (data) {
    return Api().post('user/verify', data)
  },
  comment (id, data) {
    return Api().post('blogs/' + id + '/comments', data)
  },
  removeComment (idBlog, idComment) {
    return Api().delete('blogs/' + idBlog + '/comments/' + idComment)
  },
  editComment (idBlog, idComment, comment) {
    return Api().put('blogs/' + idBlog + '/comments/' + idComment, comment)
  },
  getComment (id, data) {
    return Api().get('blogs/' + id + '/comments', data)
  },
  // USER PAGE
  getUserPage (id) {
    return Api().get('user/' + id)
  },
  editUserPage (id, user) {
    return Api().put('user/' + id, user)
  }
}
