<template>
    <div id="app">
        <Manage />
    </div>
</template>

<script>
import Manage from './pages/Manage.vue'

export default {
    name: 'app',
    components: {
        Manage
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
        margin-top: 60px;
    }
</style>
