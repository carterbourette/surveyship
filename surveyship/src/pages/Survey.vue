<template>
    <div id="app">
        <div class="container columns is-multiline is-centered" style="margin:auto;" >
            <div class="column is-one">
                <h1>{{ content.title }}</h1>
                <h3>{{ content.desc }}</h3>

                <QuestionSurvey v-bind:content="content.questions[index]" v-model="response"/>

                <ul class="uk-pagination">
                    <li v-if="index > 0"><a v-on:click="addToResponses(index--)"><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</a></li>
                    <li v-if="index < content.questions.length-1" class="uk-margin-auto-left"><a v-on:click="addToResponses(index++)">Next <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
                    <li v-else class="uk-margin-auto-left"><a v-on:click="finish()">Finish <span class="uk-margin-small-left"></span></a></li>
                </ul>

                <!-- {{responses}} -->
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import QuestionSurvey from '../components/QuestionSurvey.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'Manage',
        props: ['content'],
        components: {
            QuestionSurvey,
            Footer
        }, data() {
            return {
                index: 0,
                responses: [],
                response: null
             }
        }, methods: {
            addToResponses(index) {
                this.responses[index] = this.response
                this.response = null;
            },
            finish: function() {

            }
        }
    }
</script>

<style>
    #app { text-align: center; }

    h1 { font-size: 3rem; }
    h3 { font-size: 2rem;}
</style>
