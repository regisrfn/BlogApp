import * as types from '../types'
import database from '../../services/database'

export default {
  state: {
    blogs: null,
    blog: null,
    comments: null
  },
  mutations: {
    [types.SET_BLOGS] (state, blogs) {
      state.blogs = blogs
    },
    [types.SET_BLOG] (state, blog) {
      state.blog = blog
    },
    [types.SET_COMMENTS] (state, data) {
      state.comments = data
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
    },
    async [types.initComments] ({commit}, id) {
      const response = await database.getComment(id)
      const comments = response.data.comments
      commit(types.SET_COMMENTS, comments)
      // console.log(blog)
    },
    [types.CLEAR_BLOG] ({commit}) {
      commit(types.SET_BLOG, null)
    },
    [types.setBlogs] ({commit}, blogs) {
      commit(types.SET_BLOGS, blogs)
    },
    [types.setBlog] ({commit}, blog) {
      commit(types.SET_BLOG, blog)
    },
    [types.setComments] ({commit}, data) {
      commit(types.SET_COMMENTS, data)
    }
  },
  getters: {
    [types.BLOGS] (state) {
      return state.blogs
    },
    [types.BLOG] (state) {
      return state.blog
    },
    [types.COMMENTS] (state) {
      return state.comments
    }
  }
}
