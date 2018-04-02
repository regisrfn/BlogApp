import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blogs from '../components/blogs/blogs.vue'
import IndexBlog from '../components/blogs/index.vue'
import NewBlog from '../components/blogs/new.vue'
import ShowBlog from '../components/blogs/show.vue'
import editBlog from '../components/blogs/edit.vue'
import user from '../components/user/user.vue'
import login from '../components/user/login.vue'
import signup from '../components/user/signup.vue'
import store from '../store/store'
import * as types from '../store/types'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blogs',
      component: Blogs,
      children: [
        {
          path: '',
          name: 'IndexBlog',
          component: IndexBlog
        },
        {
          path: 'new',
          name: 'NewBlog',
          component: NewBlog,
          beforeEnter: (to, from, next) => {
            if (store.getters[types.TOKEN]) {
              next()
            } else {
              next('/user/login')
            }
          }
        },
        {
          path: ':id',
          name: 'showBlog',
          component: ShowBlog
        },
        {
          path: ':id/edit',
          name: 'editBlog',
          component: editBlog,
          beforeEnter: (to, from, next) => {
            const actualAuthor = store.getters[types.AUTHOR]
            const blogAuthor = store.getters[types.BLOG].author._id
            if (store.getters[types.TOKEN] && (actualAuthor === blogAuthor)) {
              next()
            } else {
              next('/user/login')
            }
          }
        }
      ]
    },
    {
      path: '/user',
      component: user,
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'signup',
          name: 'signup',
          component: signup
        }
      ]
    }
  ],
  mode: 'history'
})
