<template>
    <div v-if="user" class="container">
        <div id="header">
            <h1>User Profile Page</h1>
        </div>
        <div class="body row">
            <div class="col-sm-12 col-md-4">
                <img :src='user.image.url'  class="img-thumbnail">
                <div class="text-justify">
                    <h2>{{user.name}}</h2>
                    <h5> Description </h5>
                    <p>
                        Proin gravida urna id ultrices eleifend. Nullam justo augue, scelerisque et elementum a, bibendum ut risus. Cras efficitur pulvinar tortor, vel placerat massa. Cras ac finibus nulla, vel ornare ante.
                    </p>
                </div>
                <div class="blogs d-flex justify-content-between">
                    <i class="fas fa-list fa-2x"></i>
                    BLOGS
                </div>
                <div class="list-group">
                  <router-link :to="{ name: 'showBlog', params: { id: blog._id }}" v-for="blog in userBlogs" :key="blog._id" class="list-group-item list-group-item-action">{{blog.title}}</router-link>
                </div>
            </div>
            <div class="col-sm-12 col-md-8">
                <header-about v-on:input="currentTab = $event" class="mb-3"></header-about>
                <!-- Inactive components will be cached! -->
                <keep-alive>
                    <component v-bind:is="currentTabComponent"></component>
                </keep-alive>
            </div>
        </div>
</div>
</template>

<script>
import headerAbout from './about/header'
import profile from './about/Profile'
import blogs from './about/Blogs'
import * as types from '../../store/types.js'

export default {
  data () {
    return {
      currentTab: 'profile'
    }
  },
  components: {
    headerAbout,
    profile,
    blogs
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase()
    },
    user () {
      return this.$store.getters[types.USER_PAGE]
    },
    userBlogs () {
      return this.$store.getters[types.USER_BLOGS]
    }
  },
  created () {
    this.$store.dispatch(types.initUserPage, this.$route.params.id)
  }
}
</script>
