<template>
    <div id="app">
        <div v-if="this.editSurvey !== null">
            <Navbar/>
            <Manage :survey="this.editSurvey"/>
        </div>
        <div v-else-if="this.answerSurvey !== null">
            <Survey v-bind:survey="this.answerSurvey"/>
        </div>
        <div v-else>
            <Navbar/>
            <Dashboard />
        </div>

        <Footer/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import Dashboard from './pages/Dashboard.vue'
import Manage from './pages/Manage.vue'
import Survey from './pages/Survey.vue'

export default {
    name: 'app',
    components: {
        Navbar,
        Footer,

        Dashboard,
        Manage,
        Survey
    },
    data() {
        return {
            editSurvey: null,
            answerSurvey: null
        }
    },
    mounted: function() {
        this.$bus.$on('manage', survey => {
            this.editSurvey = survey
        }),
        this.$bus.$on('answer', survey => {
            this.answerSurvey = survey
        })
    }
}
</script>

<style>
    h1, h3, h4 {
        font-family: 'Gruppo', cursive;
    }
</style>
