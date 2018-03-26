import * as types from '../types'

export default {
  state: {
    username: null,
    token: null,
    author: null
  },
  mutations: {
    [types.SET_USER] (state, username) {
      state.username = username
    },
    [types.SET_TOKEN] (state, token) {
      state.token = token
    },
    [types.SET_AUTHOR] (state, author) {
      state.author = author
    },
    [types.CLEAR_AUTH] (state) {
      state.username = null
      state.token = null
      state.author = null
    }
  },
  actions: {
    [types.SET_AUTH_DATA] ({commit}, auth) {
      commit(types.SET_TOKEN, auth.token)
      commit(types.SET_USER, auth.username)
      commit(types.SET_AUTHOR, auth.author)
    },
    [types.TRY_OUT_LOGIN] ({commit, dispatch}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const username = localStorage.getItem('username')
      const author = localStorage.getItem('author')
      dispatch(types.SET_AUTH_DATA, {token, username, author})
    },
    [types.LOGOUT] ({commit}) {
      commit(types.CLEAR_AUTH)
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('author')
    }
  },
  getters: {
    [types.TOKEN] (state) {
      return state.token
    },
    [types.USER] (state) {
      return state.username
    },
    [types.AUTHOR] (state) {
      return state.author
    }
  }
}
