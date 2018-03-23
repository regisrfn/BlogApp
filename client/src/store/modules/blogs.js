import * as types from '../types'
import database from '../../services/database'

export default {
  state: {
    blogs: null,
    blog: null
  },
  mutations: {
    [types.SET_BLOGS] (state, blogs) {
      state.blogs = blogs
    },
    [types.SET_BLOG] (state, blog) {
      state.blog = blog
    }
  },
  actions: {
    async [types.INIT_BLOGS] ({commit}) {
      const response = await database.getAllBlogs()
      const blogs = response.data.blogs
      commit(types.SET_BLOGS, blogs)
      // console.log(blogs)
    },
    async [types.INIT_BLOG] ({commit}, id) {
      const response = await database.getBlog(id)
      const blog = response.data.blog
      commit(types.SET_BLOG, blog)
      // console.log(blog)
    }
  },
  getters: {
    [types.BLOGS] (state) {
      return state.blogs
    },
    [types.BLOG] (state) {
      return state.blog
    }
  }
}
