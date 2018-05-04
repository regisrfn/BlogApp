// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import * as types from './store/types'
import Vuelidate from 'vuelidate'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, process.env.DATABASE_API)
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(require('vue-moment'))
store.dispatch(types.TRY_OUT_LOGIN)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
