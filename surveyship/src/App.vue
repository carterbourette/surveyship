<template>
    <div id="app">
        <!-- <Dashboard /> -->
        <!-- <Manage v-bind:content="{title: 'Live 1'}"/> -->
        <Survey v-bind:content="{
                                    title: 'Colours',
                                    desc: 'This survey will ask you a series of colours to get to know your favourite colour.',
                                    questions: [
                                        {
                                            type: 'shortAnswer',
                                            title: 'What is why your favourite colour?',
                                            options: []
                                        },
                                        {
                                            type: 'multipleChoice',
                                            title: 'What is your favourite animal?',
                                            options: [
                                                'Dog',
                                                'Cat',
                                                'Pig'
                                            ]
                                        }, {
                                            type: 'multipleChoice',
                                            title: 'What is your favourite food?',
                                            options: [
                                                'Ribs',
                                                'Hamburger',
                                                'Pussy'
                                            ]
                                        }, {
                                            type: 'checkbox',
                                            title: 'What is your gender? (Check all that apply)',
                                            options: [
                                                'Big old bof',
                                                'Male',
                                                'Female',
                                                'Both'
                                            ]
                                        }
                                    ]
                                }"/>
    </div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue'
import Manage from './pages/Manage.vue'
import Survey from './pages/Survey.vue'

export default {
    name: 'app',
    components: {
        Dashboard,
        Manage,
        Survey
    }, data() {
        return {}
    }
}
</script>

<style>
    h1, h3, h4 {
        font-family: 'Gruppo', cursive;
    }
</style>
