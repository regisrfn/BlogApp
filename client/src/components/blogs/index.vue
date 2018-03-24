<template>
  <div class="card-group row">
    <div class="col-sm-6 col-md-4 flex px-0" v-for="blog in blogs" :key="blog._id">
      <img class="card-img-top" :src="blog.dbLocation + blog.image" alt="Card image cap">
      <div class="card-body">
        <router-link tag="h5" :to="{name:'showBlog', params: {id:blog._id}}" class="card-title text-uppercase" style = "cursor: pointer">
          {{blog.title}}
        </router-link>
        <p v-html="blog.body.substring(0, 100)" class="card-text"></p>
      </div>
      <router-link class="btn btn-primary" :to="{name:'showBlog', params: {id:blog._id}}">Read More ></router-link>
      <div class="card-footer">
        <small class="text-muted">Created: {{(new Date(blog.created)).toLocaleDateString()}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../../store/types.js'

export default {
  data () {
    return {
      interval: null
    }
  },
  computed: {
    blogs () {
      return this.$store.getters[types.BLOGS]
    }
  },
  created () {
    var vm = this
    this.interval = setInterval(function () {
      vm.$store.dispatch(types.INIT_BLOGS)
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  filters: {
    minText (value) {
      return value.substring(0, 100)
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}
</style>
