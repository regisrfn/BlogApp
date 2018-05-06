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
            const expiresIn = new Date(localStorage.getItem('expiresIn'))
            const now = new Date()
            if (now >= expiresIn) {
                dispatch(types.LOGOUT)
                return
            } else {
                var expiration = (expiresIn - now)
                // console.log(expiration)
                dispatch(types.setLogoutTimer, expiration)
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
        },
        [types.setLogoutTimer] ({dispatch}, expiration) {
            setTimeout(() => {
                dispatch(types.LOGOUT)
            }, expiration)
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
