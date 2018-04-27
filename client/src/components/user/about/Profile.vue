<template>
<div class="container pt-3">
    <div class="d-flex justify-content-between">
        <h2 class="mb-0"> <i class="fas fa-user mr-3"></i>ABOUT</h2>
        <button class="btn btn-success" v-if="!editON" v-on:click="editON = !editON">Edit</button>
        <div v-else>
            <button class="btn btn-success"  v-on:click="submit">Save</button>
            <button class="btn btn-warning"  v-on:click="cancel">Cancel</button>
        </div>
    </div>
    <hr>
    <div class="text-left">
        <div class="row" v-if="!editON">
            <h5 v-for="(item,index) in keys" :key="index"
            class="col-md-6">
                <strong class="mr-1">{{item}}: </strong>{{user[item.toLowerCase()]}}
            </h5>
        </div>
        <div class="row" v-else>
            <h5 v-for="(item,index) in keys" :key="index"
            class="col-md-6">
                <strong class="mr-1">{{item}}</strong>
                <input class="form-control" v-model="user[item.toLowerCase()]">
            </h5>
        </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
        <h3 class="mb-0"> <i class="fas fa-info mr-3"></i>Activity</h3>
    </div>
</div>
</template>

<script>
import * as types from '../../../store/types.js'
import database from '../../../services/database.js'
// import toastr from 'toastr'

export default {
  data  () {
    return {
      editON: false,
      newUser: {},
      keys: ['Name', 'Username', 'City', 'Country', 'Birthday', 'Phone', 'Interests', 'Email', 'Website']
    }
  },
  computed: {
    user () {
      return this.$store.getters[types.USER_PAGE]
    }
  },
  methods: {
    submit () {
      this.editON = !this.editON
      database.editUserPage(this.$store.getters[types.AUTHOR], this.user)
        .then()
        .catch(() => {
          this.$router.push('/user/login')
        })
    },
    cancel () {
      this.editON = !this.editON
      this.$store.dispatch(types.initUserPage, this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.form-control{
    padding: 1px 0;
}
</style>
