<template>
<div>
    <div class="d-flex justify-content-between">
        <h2 class="mb-0"> <i class="fas fa-user mr-3"></i>ABOUT</h2>
        <button class="btn btn-success" v-if="!editON" v-on:click=" editON = !editON">Edit</button>
        <button class="btn btn-success" v-if="editON" v-on:click="submit">Save</button>
    </div>
    <div class="content text-justify">
        <div class="row" v-if="!editON">
            <div class="col-md-6">
                <h5> <strong>Name:</strong>{{user.firstName}} {{user.lastName}}</h5>
                <h5> <strong>Username: </strong>{{user.username}}</h5>
                <h5> <strong>City:</strong> {{user.city}}</h5>
                <h5> <strong>Country:</strong> {{user.country}}</h5>
                <h5> <strong>Birthday:</strong> {{user.birthday}}</h5>
            </div>
            <div class="col-md-6">
                <h5> <strong>Phone:</strong>{{user.phone}}</h5>
                <h5> <strong>Interests:</strong>{{user.interests}}</h5>
                <h5> <strong>Email: </strong>{{user.email}}</h5>
                <h5> <strong>Website:</strong>{{user.website}}</h5>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-md-6">
                <h5 class="d-flex"> <strong class="mr-1">Name: </strong> <input class="form-control" v-model="user.firstName"></h5>
                <h5 class="d-flex"> <strong>Username: </strong> <input class="form-control" v-model="user.username"></h5>
                <h5 class="d-flex"> <strong>City: </strong><input class="form-control"
                v-model="user.email"></h5>
                <h5 class="d-flex"><strong>Country: </strong><input class="form-control"
                v-model="user.country"></h5>
                <h5 class="d-flex"><strong>Birthday: </strong><input class="form-control" v-model="user.birthday">
                </h5>
            </div>
            <div class="col-md-6">
                <h5 class="d-flex"> <strong>Phone: </strong><input class="form-control"   v-model="user.phone"></h5>
                <h5 class="d-flex"> <strong>Interests: </strong><input class="form-control" v-model="user.interests"></h5>
                <h5 class="d-flex"> <strong>Email:</strong><input class="form-control" v-model="user.email"></h5>
                <h5 class="d-flex"> <strong>Website: </strong><input class="form-control" v-model="user.website"></h5>
            </div>
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
import toastr from 'toastr'

export default {
  data  () {
    return {
      editON: false,
      newUser: {}
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
          toastr.warning('Error on login', 'Error')
        })
    }
  }
}
</script>

<style scoped>
.form-control{
    padding: 1px 0;
}
</style>
