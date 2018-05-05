<template>
    <div v-if="blog">
        <div class="card">
            <img class="card-img-top" :src="splitString(blog.image.url,'upload/','upload/q_auto/')" alt="Card image cap">
            <p>{{blog.created | date}}</p>
            <p>Created by: {{blog.author.username}}</p>
            <div class="card-body">
                <h5 class="card-title">{{blog.title}}</h5>
                <p v-html="blog.body" class="card-text text-justify"></p>
                <div v-if="isAuthor(blog.author._id)">
                    <router-link :to="{name:'editBlog'}" class="btn btn-primary">EDIT</router-link>
                    <button v-on:click="remove" class="btn btn-danger">DELETE</button>
                </div>
            </div>
        </div>
        <hr>
        <hr>
        <div class="card">
            <div class="card-header">
                <div class="justify-content-between">
                    <h4>
                        <strong>Comments <i class="fas fa-comment"></i></strong>
                    </h4>
                </div>
            </div>
            <div class="card-body">
                <div class="comments form-group text-justify card">
                    <label for="body"><strong>Write your comment <i class="fas fa-pencil-alt"></i></strong></label>
                    <textarea v-model="commentText" class="form-control" id="body" rows="3"></textarea>
                    <br/>
                    <button v-on:click="comment" class="btn btn-success">Comment</button>
                </div>
                <p v-if="blogComments.length == 0"> There are not comments on this post</p>
                <h5 v-else> {{blogComments.length}} comments</h5>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-action flex-column align-items-start"
                    v-on:click="editComment(comment)"
                    :class="{newComment:isAuthor(blog.author._id) & comment.meta.new}"
                    v-for="comment in blogComments" :key="comment._id">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{comment.author.username}}</h5>
                            <small>{{comment.created | moment("from", "now")}}</small>
                            <button id="trash-button" class="buttonNone" v-if="isAuthor(comment.author._id)" v-on:click="removeComment(comment._id)">
                                    <i class="fas fa-trash-alt trash-icon"></i>
                                </button>
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
            interval: null,
            isRemovingComment: false
        }
    },
    computed: {
        blog () {
            // console.log(this.$store.getters[types.BLOG])
            return this.$store.getters[types.BLOG]
        },
        blogComments () {
            // console.log(this.$store.getters[types.AUTHOR])
            return this.$store.getters[types.COMMENTS] || []
        }
    },
    created () {
        var vm = this
        vm.$store.dispatch(types.INIT_BLOG, vm.$route.params.id)
        vm.$store.dispatch(types.initComments, vm.$route.params.id)
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
                    toastr.warning('You are not the user blog', 'Error')
                    // this.$router.push('/user/login')
                })
        },
        comment () {
            var comment = {
                text: this.commentText,
                author: this.$store.getters[types.AUTHOR]
            }
            database.comment(this.$route.params.id, {comment})
                .then()
                .catch(() => {
                    toastr.warning('Error on comment post', 'Error!')
                })
        },
        editComment (comment) {
            if (this.isAuthor(this.blog.author._id) && !this.isRemovingComment) {
                comment.meta.new = false
                database.editComment(this.$route.params.id, comment._id, {comment})
                    .then()
            }
        },
        removeComment (id) {
            this.isRemovingComment = true
            database.removeComment(this.$route.params.id, id)
                .then(() => {
                    this.isRemovingComment = false
                    toastr.success('Comment has been sucessfully removed.', 'Removed!')
                })
                .catch(() => {
                    this.isRemovingComment = false
                    toastr.error('Error on delete comment', 'Error!')
                })
        },
        splitString (stringToSplit, separator, join) {
            var arrayOfStrings = stringToSplit.split(separator)
            return arrayOfStrings.join(join)
        },
        isAuthor (author) {
            return this.$store.getters[types.AUTHOR] === author
        },
        resetNewComments () {
            var blog = this.blog
            blog.meta.newComments = 0
            var formData = new FormData()
            formData.append('blog', JSON.stringify(blog))
            database.updateBlog(this.$route.params.id, formData)
        }
    },
    sockets: {
        // connect () {
        //   // console.log('socket connected')
        // },
        modifiedBlog (blog) {
            this.$store.dispatch(types.setBlog, blog)
        },
        createdComment (comments) {
            toastr.success(comments[0].text, 'New comment!')
            this.$store.dispatch(types.setComments, comments)
        },
        deletedComment (comments) {
            this.$store.dispatch(types.setComments, comments)
        }
    }
}
</script>

<style scoped>
    .comments {
        border-left: 5px solid #00C851;
        padding: 15px;
    }
    .buttonNone {
        background-color: transparent;
        border: none;
        border: hidden;
        padding: 0;
    }
    #trash-button:hover {
        color: red;
        font-size: 1.8rem;
    }
    .newComment {
        background-color: rgba(17, 218, 10, 0.205);
    }
    .newComment:hover {
        background-color: rgba(72, 221, 58, 0.527);
    }
</style>
