<template>
  <div v-if="blog" class="card">
    <img class="card-img-top" :src="blog.dbLocation + blog.image" alt="Card image cap">
    <p>{{blog.created | date}}</p>
    <div class="card-body">
      <h5 class="card-title">{{blog.title}}</h5>
      <p v-html="blog.body" class="card-text text-justify"></p>
      <router-link :to="{name:'editBlog'}" class="btn btn-primary">EDIT</router-link>
      <button v-on:click="remove" class="btn btn-danger">DELETE</button>
    </div>
  </div>
</template>

<script>
import database from '../../services/database.js'
import * as types from '../../store/types.js'
import toastr from 'toastr'

export default {
  computed: {
    blog () {
      return this.$store.getters[types.BLOG]
    }
  },
  created () {
    this.$store.dispatch(types.INIT_BLOG, this.$route.params.id)
  },
  filters: {
    date: function (value) {
      const date = (new Date(value)).toLocaleDateString()
      const time = (new Date(value)).toLocaleTimeString()
      return 'Date: ' + date + ' ' + 'Time: ' + time
    }
  },
  methods: {
    remove () {
      database.deleteBlog(this.$route.params.id)
        .then(response => {
          const status = response.data.status
          if (status) {
            this.$router.push('/blogs')
            toastr.success('Blog has been sucessuful removed.', 'Removed!')
          } else {
            toastr.warning('Error removing blog.', 'Not Removed!')
            this.$router.push('/user/login')
          }
        })
        .catch(error => {
          this.$router.push('/user/login')
          console.log(error)
        })
    }
  }
}
</script>
