import * as types from '../types'

export default {
  state: {
    username: null,
    token: null
  },
  mutations: {
    [types.SET_USER] (state, username) {
      state.username = username
    },
    [types.SET_TOKEN] (state, token) {
      state.token = token
    }
  },
  actions: {
    [types.SET_AUTH_DATA] ({commit}, auth) {
      commit(types.SET_TOKEN, auth.token)
      commit(types.SET_USER, auth.username)
    },
    [types.TRY_OUT_LOGIN] ({commit, dispatch}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const username = localStorage.getItem('username')
      dispatch(types.SET_AUTH_DATA, {token, username})
    }
  },
  getters: {
    [types.TOKEN] (state) {
      return state.token
    },
    [types.USER] (state) {
      return state.username
    }
  }
}
