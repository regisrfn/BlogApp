import Vue from 'vue'
import Vuex from 'vuex'
import blogs from './modules/blogs'
import auth from './modules/auth'
import userPage from './modules/userPage'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        blogs,
        auth,
        userPage
    }
})
