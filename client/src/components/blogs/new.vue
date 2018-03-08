<template>
  <div class="d-flex justify-content-center">
    <form v-on:submit.prevent="submit">
      <h1>Create New Blog</h1>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="newBlog.title" type="text" class="form-control" id="title"  placeholder="Enter title">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input v-model="newBlog.image" type="text" class="form-control" id="image"  placeholder="Enter image">
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea v-model="newBlog.body" class="form-control" id="body" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</template>

<script>
import database from '../../services/database.js'
import * as types from '../../store/types.js'
export default {
  data () {
    return {
      newBlog: {}
    }
  },
  methods: {
    async submit () {
      const response = await database.newBlog({blog: this.newBlog})
      const status = response.data.status
      if (status) {
        this.$store.dispatch(types.INIT_BLOGS)
        this.$router.push('/blogs')
      }
    }
  }
}
</script>
