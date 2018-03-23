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
