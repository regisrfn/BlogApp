<template>
  <div v-if="blog" class="d-flex justify-content-center">
    <form v-on:submit.prevent="submit">
      <h1 vonce>Edit {{blog.title}}</h1>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="blog.title" type="text" class="form-control" id="title">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input v-model="blog.image" type="text" class="form-control" id="image">
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea v-model="blog.body" class="form-control" id="body" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</template>

<script>
import database from '../../services/database.js'
import * as types from '../../store/types.js'
export default {
  computed: {
    blog () {
      return this.$store.getters[types.BLOG]
    }
  },
  created () {
    this.$store.dispatch(types.INIT_BLOG, this.$route.params.id)
  },
  methods: {
    async submit () {
      const response = await database.updateBlog(this.$route.params.id, {blog: this.blog})
      console.log(response.data)
      const status = response.data.status
      if (status) {
        this.$router.push('/blogs/' + this.$route.params.id)
      }
    }
  }
}
</script>
