<template>
  <div v-if="blog">
    <div class="card">
      <img class="card-img-top" :src="splitString(blog.image.url,'upload/','upload/q_auto/')" alt="Card image cap">
      <p>{{blog.created | date}}</p>
      <p>Created by: {{blog.author.username}}</p>
      <div class="card-body">
        <h5 class="card-title">{{blog.title}}</h5>
        <p v-html="blog.body" class="card-text text-justify"></p>
        <router-link :to="{name:'editBlog'}" class="btn btn-primary">EDIT</router-link>
        <button v-on:click="remove" class="btn btn-danger">DELETE</button>
      </div>
    </div>
    <hr>
    <hr>
    <div class="card">
      <div class="card-header">
        <h4 class="text-justify"><strong>Comments <i class="fas fa-comment"></i></strong></h4>
      </div>
      <div class="card-body">
        <div class="comments form-group text-justify card">
            <label for="body"><strong>Write your comment <i class="fas fa-pencil-alt"></i></strong></label>
            <textarea v-model="commentText" class="form-control" id="body" rows="3"></textarea>
            <br/>
            <button v-on:click="comment" class="btn btn-success">Comment</button>
        </div>
        <p v-if="blog.comments.length == 0"> There are not comments on this post</p>
          <h5 v-else> {{blog.comments.length}} comments</h5>
          <ul class="list-group">
              <li class="list-group-item list-group-item-action flex-column align-items-start"
              v-for="comment in blog.comments" :key="comment._id">
                  <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{comment.author.username}}</h5>
                      <small>3 days ago</small>
                  </div>
                  <p class="mb-1">{{comment.text}}</p>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import database from '../../services/database.js'
import * as types from '../../store/types.js'
import toastr from 'toastr'

export default {
  data () {
    return {
      commentText: null,
      interval: null
    }
  },
  computed: {
    blog () {
      // console.log(this.$store.getters[types.BLOG])
      return this.$store.getters[types.BLOG]
    }
  },
  created () {
    var vm = this
    vm.$store.dispatch(types.INIT_BLOG, vm.$route.params.id)
  },
  beforeDestroy () {
    this.$store.dispatch(types.CLEAR_BLOG)
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
            toastr.success('Blog has been sucessfully removed.', 'Removed!')
          } else {
            toastr.warning(response.data.message, 'Error')
          }
        })
        .catch(() => {
          this.$router.push('/user/login')
        })
    },
    comment () {
      var comment = {
        text: this.commentText,
        author: this.$store.getters[types.AUTHOR]
      }
      database.comment(this.$route.params.id, {comment})
        .then(response => {
          const status = response.data.status
          if (status) {
            toastr.success('Commented on post')
          } else {
            toastr.warning('Error on comment post', 'Error!')
          }
        })
        .catch(() => {
          toastr.warning('Error on comment post', 'Error!')
        })
    },
    splitString (stringToSplit, separator, join) {
      var arrayOfStrings = stringToSplit.split(separator)
      return arrayOfStrings.join(join)
    }
  },
  sockets: {
    // connect () {
    //   // console.log('socket connected')
    // },
    modifiedBlog (blog) {
      console.log(blog)
      this.$store.dispatch(types.setBlog, blog)
    }
  }
}
</script>

<style scoped>
.comments {
  border-left: 5px solid #00C851;
  padding: 15px;
}

</style>
