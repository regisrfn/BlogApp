<template>
  <div class="d-flex justify-content-center">
    <form v-on:submit.prevent="submit">
      <h1>Login</h1>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" class="form-control" id="email"  placeholder="Enter email"
        @blur="$v.email.$touch()">
        <div v-if="$v.email.$error" class="alert alert-danger alert-dismissible fade show mt-1" role="alert">
            <strong>Error</strong> Please provide a valid email address
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="form-control" id="password"  placeholder="Enter password" required>
      </div>
      <button type="submit" class="btn btn-success w-100">Submit</button>
    </form>
  </div>
</template>

<script>
import database from '../../services/database.js'
import * as types from '../../store/types.js'
import {required, email} from 'vuelidate/lib/validators'
import toastr from 'toastr'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    submit () {
      const user = {
        email: this.email,
        password: this.password
      }
      database.login(user)
        .then(response => {
          const status = response.data.status
          console.log(response.data)
          if (status) {
            const authData = {
              token: response.data.token,
              username: response.data.username,
              author: response.data.author
            }
            localStorage.setItem('token', authData.token)
            localStorage.setItem('username', authData.username)
            localStorage.setItem('author', authData.author)
            this.$store.dispatch(types.SET_AUTH_DATA, authData)
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
          }
        })
        .catch(() => {
          toastr.warning('Error on login', 'Error')
        })
    }
  },
  validations: {
    email: {
      email,
      required
    }
  }
}
</script>
