<template>
  <div class="container" id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/header'
import database from './services/database.js'
import * as types from './store/types.js'

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  async created () {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    var response = await database.checkToken({token})
    if (response.data.auth) {
      const username = localStorage.getItem('username')
      this.$store.dispatch(types.SET_AUTH_DATA, {token, username})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5rem;
}
</style>
