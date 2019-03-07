<template>
    <div id="app">
        <!-- <Dashboard /> -->
        <Manage />
    </div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue'
import Manage from './pages/Manage.vue'

export default {
    name: 'app',
    components: {
        Dashboard,
        Manage
    }, data() {
        return {}
    }
}
</script>

<style>

</style>
