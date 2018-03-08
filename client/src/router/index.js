import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blogs from '../components/blogs/blogs.vue'
import IndexBlog from '../components/blogs/index.vue'
import NewBlog from '../components/blogs/new.vue'
import ShowBlog from '../components/blogs/show.vue'
import editBlog from '../components/blogs/edit.vue'

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
          component: NewBlog
        },
        {
          path: ':id',
          name: 'showBlog',
          component: ShowBlog
        },
        {
          path: ':id/edit',
          name: 'editBlog',
          component: editBlog
        }
      ]
    }
  ],
  mode: 'history'
})
