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
.loader {
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 100px auto;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.infoi {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.loading {
    background: black;
}
</style>
