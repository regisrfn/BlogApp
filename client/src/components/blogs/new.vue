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
        <input @change="onFileChanged" type="file" class="form-control" id="image">
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
import toastr from 'toastr'
export default {
  data () {
    return {
      newBlog: {},
      selectedFile: null
    }
  },
  methods: {
    async submit () {
      var formData = new FormData()
      formData.append('blogImage', this.selectedFile)
      for (var key in this.newBlog) {
        formData.append(key, this.newBlog[key])
      }
      const response = await database.newBlog(formData)
      const status = response.data.status
      if (status) {
        this.$store.dispatch(types.INIT_BLOGS)
        toastr.success('Blog has been sucessuful added.', 'Included!')
        this.$router.push('/blogs')
      }
    },
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    }
  }
}
</script>
