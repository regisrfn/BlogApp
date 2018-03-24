<template>
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand" href="#">
    <i class="fas fa-code fa-2x"></i>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" data-toggle="collapse" href="#navbarSupportedContent" role="button" aria-expanded="false" aria-controls="collapseExample"
        to="/blogs">
        Blogs <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" data-toggle="collapse" href="#navbarSupportedContent" role="button" aria-expanded="false" aria-controls="collapseExample"
        to="/blogs/new">
          New Blog
        </router-link>
      </li>
    </ul>

    <ul class="navbar-nav">
      <template v-if="!username">
        <li class="nav-item">
        <router-link class="nav-link" data-toggle="collapse" href="#navbarSupportedContent" role="button" aria-expanded="false" aria-controls="collapseExample"
        to="/user/login">
          Login
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" data-toggle="collapse" href="#navbarSupportedContent" role="button" aria-expanded="false" aria-controls="collapseExample"
        to="/user/signup">
          Sign Up
        </router-link>
      </li>
      </template>
      <li v-if="username" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{username}}
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" v-on:click="logout">Logout</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import * as types from '../../store/types.js'
export default {
  computed: {
    username () {
      return this.$store.getters[types.USER]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch(types.LOGOUT)
      this.$router.replace('/user/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 0rem 1rem;
}
</style>
