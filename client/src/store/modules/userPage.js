import * as types from '../types'
import database from '../../services/database'

export default {
  state: {
    user: null
  },
  mutations: {
    [types.SET_USER_PAGE] (state, user) {
      state.user = user
    }
  },
  actions: {
    async [types.initUserPage] ({commit}, id) {
      const response = await database.getUserPage(id)
      const userPage = response.data.user
      commit(types.SET_USER_PAGE, userPage)
      // console.log(blog)
    },
    [types.clearUserPage] ({commit}) {
      commit(types.SET_USER_PAGE, null)
    },
    [types.setUserPage] ({commit}, data) {
      commit(types.SET_USER_PAGE, data)
    }
  },
  getters: {
    [types.USER_PAGE] (state) {
      return state.user
    }
  }
}
