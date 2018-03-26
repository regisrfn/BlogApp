<template>
  <div v-if="blog" class="d-flex justify-content-center">
    <form v-on:submit.prevent="submit">
      <h1 vonce>Edit</h1>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="blog.title" type="text" class="form-control" id="title">
      </div>
      <div class="form-group">
        <img class="card-img-top" :src="blog.dbLocation + blog.image" alt="Card image cap">
        <label for="image">Image</label>
        <input @change="onFileChanged" type="file" class="form-control" id="image">
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
import toastr from 'toastr'
export default {
  data () {
    return {
      selectedFile: null
    }
  },
  computed: {
    blog () {
      return this.$store.getters[types.BLOG]
    }
  },
  created () {
    this.$store.dispatch(types.INIT_BLOG, this.$route.params.id)
  },
  methods: {
    submit () {
      var formData = new FormData()
      if (this.selectedFile) {
        formData.append('blogImage', this.selectedFile)
      }
      for (var key in this.blog) {
        formData.append(key, this.blog[key])
      }
      database.updateBlog(this.$route.params.id, formData)
        .then(response => {
          const status = response.data.status
          if (status) {
            toastr.success('Blog has been sucessuful Edited.', 'EDITED!')
            this.$router.push('/blogs/' + this.$route.params.id)
          } else {
            toastr.warning('Error updating blog', 'Error')
          }
        })
        .catch(() => {
          toastr.warning('Error updating blog', 'Error')
        })
    },
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    }
  }
}
</script>
