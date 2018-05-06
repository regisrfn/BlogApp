<template>
    <div v-if='user'>
        <div id='header' class='header-style bg-green'>
            <h1>User Profile Page</h1>
        </div>
        <div class='container'>
            <div class='body row'>
                <div class='col-sm-12 col-md-4'>
                    <!-- image -->
                    <div @mouseenter='isMouseOver=true' class='col-sm-12 px-0'>
                        <!-- image overlaping if mouse is over-->
                        <div @mouseleave='isMouseOver=false' v-if='isMouseOver | isUploadingImage' class='overlap'>
                            <div v-if='isUploadingImage' class='center d-flex flex-column align-items-center'>
                                <div class='loader'></div>
                                <h4 class='text-white'><strong>Loading ...</strong></h4>
                            </div>
                            <div v-else class='d-flex justify-content-center'>
                                <label for='file-upload' class='custom-file-upload'><i class='fa fa-edit'></i> Choose Image
                                            </label>
                                <input @change='onFileChanged' id='file-upload' type='file' />
                            </div>
                        </div>
                        <img :src='splitString(user.image.url,"upload/","upload/q_auto/")' class='img-thumbnail card-left'>
                    </div>
                    <div class='bg-light container'>
                        <div class='text-justify'>
                            <h2>{{user.name}}</h2>
                            <h5> Description </h5>
                            <p>
                                Proin gravida urna id ultrices eleifend. Nullam justo augue, scelerisque et elementum a, bibendum ut risus. Cras efficitur pulvinar tortor, vel placerat massa. Cras ac finibus nulla, vel ornare ante.
                            </p>
                        </div>
                        <hr>
                        <div class='blogs d-flex justify-content-between'>
                            <i class='fas fa-list fa-2x'></i> BLOGS
                        </div>
                        <div class='list-group'>
                            <router-link :to='{ name: "showBlog", params: { id: blog._id }}' v-for='blog in userBlogs' :key='blog._id' class='list-group-item list-group-item-action'>{{blog.title}}</router-link>
                        </div>
                    </div>
                </div>
                <div class='col-sm-12 col-md-8'>
                    <header-about v-on:input='currentTab = $event' class='mt-3 header-about py-0'></header-about>
                    <!-- Inactive components will be cached! -->
                    <keep-alive>
                        <component v-bind:is='currentTabComponent' class='bg-light'></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerAbout from './about/header'
import profile from './about/Profile'
import blogs from './about/Blogs'
import * as types from '../../store/types.js'
import database from '../../services/database.js'

export default {
    data () {
        return {
            currentTab: 'profile',
            isMouseOver: false,
            selectedFile: null,
            isUploadingImage: false
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
    },
    methods: {
        onFileChanged (event) {
            this.isUploadingImage = true
            this.selectedFile = event.target.files[0]
            // console.log(event)
            var formData = new FormData()
            var user = {
                image: this.user.image
            }
            formData.append('blogImage', this.selectedFile)
            formData.append('user', JSON.stringify(user))
            database.editUserPage(this.$store.getters[types.AUTHOR], formData)
                .then(response => {
                    this.$store.dispatch(types.initUserPage, this.$route.params.id)
                    this.isUploadingImage = false
                })
                .catch(() => {
                    this.isUploadingImage = false
                })
        },
        splitString (stringToSplit, separator, join) {
            var arrayOfStrings = stringToSplit.split(separator)
            return arrayOfStrings.join(join)
        }
    }
}
</script>

<style scoped>
    .header-style {
        background-color: #eaeaea;
        text-align: center;
    }
    .card-left {
        border-top: 3px solid greenyellow;
    }
    .body {
        background-color: rgba(235, 228, 228, 0.507);
    }
    h1 {
        margin-bottom: 0px;
    }
    .overlap {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
    }
    .overlap {
        z-index: 1;
        background-color: rgba(240, 233, 233, 0.356);
    }
    input[type='file'] {
        display: none;
    }
    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.37);
    }
    .loader {
        border: 8px solid #f3f3f3;
        /* Light grey */
        border-top: 8px solid #42db34;
        /* Blue */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
        margin: 0;
        z-index: 1;
    }
    img {
        min-width: 120px;
    }
    .center {
        margin-top: 15%;
    }
</style>
