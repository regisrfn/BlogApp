<template>
  <div class="container" id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/header'

export default {
  name: 'App',
  components: {
    appHeader: Header
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
