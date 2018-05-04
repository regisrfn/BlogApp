import * as types from '../types'
import database from '../../services/database'

export default {
    state: {
        user: null,
        userBlogs: null
    },
    mutations: {
        [types.SET_USER_PAGE] (state, user) {
            state.user = user
        },
        [types.SET_USER_BLOGS] (state, blogs) {
            state.userBlogs = blogs
        }
    },
    actions: {
        async [types.initUserPage] ({commit, dispatch}, id) {
            const response = await database.getUserPage(id)
            const userPage = response.data.user
            commit(types.SET_USER_PAGE, userPage)
            dispatch(types.initUserBlogs, id)
            // console.log(blog)
        },
        [types.initUserBlogs] ({commit}, data) {
            database.getAllBlogs({author: data})
                .then(response => {
                    const userBlogs = response.data.blogs
                    commit(types.SET_USER_BLOGS, userBlogs)
                })
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
        },
        [types.USER_BLOGS] (state) {
            return state.userBlogs
        }
    }
}
