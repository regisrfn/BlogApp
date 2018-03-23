<template>
  <div class="d-flex justify-content-center">
    <form v-on:submit.prevent="submit">
      <h1>Login</h1>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="user.email" type="email" class="form-control" id="email"  placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="user.password" type="password" class="form-control" id="password"  placeholder="Enter password">
      </div>
      <button type="submit" class="btn btn-success w-100">Submit</button>
    </form>
  </div>
</template>

<script>
import database from '../../services/database.js'
import * as types from '../../store/types.js'
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    async submit () {
      const response = await database.login(this.user)
      const status = response.data.status
      console.log(response.data)
      if (status) {
        const authData = {
          token: response.data.token,
          username: response.data.username
        }
        localStorage.setItem('token', authData.token)
        localStorage.setItem('username', authData.username)
        this.$store.dispatch(types.SET_AUTH_DATA, authData)
      }
    }
  }
}
</script>
