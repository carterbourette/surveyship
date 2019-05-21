<template>
    <div id="Survey">
        <div class="container columns is-multiline is-centered" style="margin:auto;" >
            <div class="column is-one">
                <h1>{{ survey.title }}</h1>
                <h3>{{ survey.desc }}</h3>

                <div class="container columns is-centered">
                    <div class="column is-one-quarter">
                        <a v-if="index > 0" @click="index--"> <span uk-pagination-previous/> Previous</a>
                    </div>

                    <div class="column is-half">
                        <progress class="uk-progress" :value="index" :max="survey.questions.length"/>
                    </div>

                    <div class="column is-one-quarter">
                        <a v-if="index < survey.questions.length-1" @click="index++">Next <span uk-pagination-next/></a>
                        <a v-else @click="index++;finish()"> Finish</a>
                    </div>
                </div>

                <div v-if="index < survey.questions.length && index >= 0">
                    <!-- Question Title -->
                    <h4>{{ survey.questions[index].title }}</h4>

                    <!-- input Form -->
                    <div v-if="survey.questions[index]" class="columns is-centered" id="questionBody">
                        <div class="column is-one-third uk-text-left">
                            <!-- Key is important!! It forces rerendering the component when updating the index -->
                            <!-- Display text boxes if the survey.type is short answer -->
                            <div v-if="survey.questions[index].type === 'shortAnswer'" :key="survey.questions[index].questionNumber">
                                <ShortAnswer :question="survey.questions[index]" :mode="'answering'"/>
                            </div>

                            <!-- Display radio buttons if the survey.type is multiple choice -->
                            <div v-else-if="survey.questions[index].type === 'multipleChoice'" :key="survey.questions[index].questionNumber">
                                <RadioButton :question="survey.questions[index]" :mode="'answering'"/>
                            </div>

                            <!-- Display check boxes if the survey.type is checkbox -->
                            <div v-else-if="survey.questions[index].type === 'checkBox'" :key="survey.questions[index].questionNumber">
                                <Checkbox    :question="survey.questions[index]" :mode="'answering'"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Dashboard from './Dashboard.vue'
import ShortAnswer from '../components/ShortAnswer.vue'
import RadioButton from '../components/RadioButton.vue'
import Checkbox from '../components/Checkbox.vue'

export default {
    name: 'Manage',
    extends: Dashboard,
    props: ['survey'],
    components: {
        ShortAnswer,
        RadioButton,
        Checkbox
    }, data() {
        return {
            index: 0
         }
    }, methods: {
        finish: function() {
            console.log("Finishing");
            console.log(this.survey.questions);

            this.$bus.$emit('manage', null)
            this.$bus.$emit('answer', null)
        }
    },
    mounted: function() {
        this.setIndices(this.survey)
    }
}
</script>

<style scoped>
    #Survey {
        background-image: url('../assets/shattered.png');
        text-align: center;
        font-size: 2rem;

        min-height: 85vh;
    }

    h1 { font-size: 3.5rem; }
    h3 { font-size: 2.5rem; }
    hr { margin: 3rem auto; }
    a  { font-size: 1.5rem; }

    h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
    }
</style>
