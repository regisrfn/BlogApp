<template>
  <div v-if="blog">
    <div class="card">
      <img class="card-img-top" :src="blog.dbLocation + blog.image" alt="Card image cap">
      <p>{{blog.created | date}}</p>
      <p>Created by: {{blog.author.username}}</p>
      <div class="card-body">
        <h5 class="card-title">{{blog.title}}</h5>
        <p v-html="blog.body" class="card-text text-justify"></p>
        <router-link :to="{name:'editBlog'}" class="btn btn-primary">EDIT</router-link>
        <button v-on:click="remove" class="btn btn-danger">DELETE</button>
      </div>
    </div>
    <div class="comments">
        <hr>
        <hr>
        <div>
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
        <div class="form-group">
            <label for="body"><strong>Comment</strong></label>
            <textarea v-model="commentText" class="form-control" id="body" rows="3"></textarea>
            <br/>
            <button v-on:click="comment" class="btn btn-primary">Comment</button>
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
    this.interval = setInterval(function () {
      vm.$store.dispatch(types.INIT_BLOG, vm.$route.params.id)
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
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
    }
  }
}
</script>
