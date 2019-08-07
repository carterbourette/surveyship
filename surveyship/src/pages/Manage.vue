<template>
    <div id="Manage">
        <h1>Manage: {{ survey.title }}</h1>

        <!-- Survey Title form -->
        <div class="columns is-centered">
            <form class="column is-half">
                <label>Title</label>
                <input class="uk-input" type="text" placeholder="Enter your surveys title:" v-model="survey.title">
            </form>
        </div>

        <!-- Survey Description Form -->
        <div class="columns is-centered">
            <form class="column is-half">
                <label>Description</label>
                <textarea class="uk-textarea" rows="6" placeholder="Enter your surveys description:" v-model="survey.desc"/>
            </form>
        </div>

        <!-- Questions List -->
        <div class="columns is-centered">
            <div class="column is-half">
                <div v-for="question in survey.questions">
                    <component :is="question.type" :question="question" :mode="'edit'" />
                </div>
            </div>
        </div>

        <!-- Add question button -->
        <button class="uk-icon-button" uk-icon="icon:plus-circle; ratio:2;" type="button"/>
        <div class="newQuestion " uk-dropdown="pos: bottom-justify">
            <div class="uk-text-left">
                <label class="optionSizing"><input class="uk-radio" type="radio" name="type" value="shortAnswer"     v-model="option"> Short Answer</label><br>
                <label class="optionSizing"><input class="uk-radio" type="radio" name="type" value="multipleChoice"  v-model="option"> Mutliple Choice</label><br>
                <label class="optionSizing"><input class="uk-radio" type="radio" name="type" value="checkBox"        v-model="option"> Checkbox</label>
            </div>

            <button class="uk-button uk-button-primary uk-button-small" @click="addToList()">Create</button>
        </div>

        <div class="columns is-centered">
            <div class="column is-full">
                <button class="uk-button uk-button-primary uk-button-medium" @click="finish()"> Done </button>
            </div>
        </div>
    </div>
</template>

<script>
import Dashboard from './Dashboard.vue'

import ShortAnswer from '@/questionTypes/ShortAnswer.vue'
import RadioButton from '@/questionTypes/RadioButton.vue'
import Checkbox from '@/questionTypes/Checkbox.vue'

export default {
    name: 'Manage',
    extends: Dashboard,
    props: ['survey'],
    components: {
        ShortAnswer,
        RadioButton,
        Checkbox
    },
    data() {
        return {
            option: null
        }
    },
    methods: {
        addToList: function() {
            if (this.option)
                this.survey.questions.push({
                    type: this.option,
                    title: '',
                    options: [""],
                    response: null
                })
            this.option = null
        },

        finish() {
            console.log(this.survey.questions);
            this.$bus.$emit('manage', null)
        }
    },
    mounted: function() {
        this.$bus.$on('deleteQuestion', index => {
            if (confirm('Are you sure you want to delete this question?')) {
                this.survey.questions.splice(index, 1)
                this.setIndices(this.survey)
            }
        }),

        this.setIndices(this.survey)
    }
}
</script>

<style scoped>
    #Manage {
        background-image: url('../assets/shattered.png');
        text-align: center;
        font-size: 1.5rem;
    }

    h1 { font-size: 4rem; }
    h3 { font-size: 2rem; }

    .column, h1 {
        padding-top: 30px;
    }

    .optionSizing {
        font-size: 1.1rem;
    }

    textarea {
        min-height: 20vh;
        min-width: 100%;
        text-align: top;
        font-size: 1.25rem;
    }
</style>
