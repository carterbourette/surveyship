<template>
    <div id="app">
        <h1>Welcome to the manage page</h1>

        <div class="container columns is-multiline is-centered" style="margin:auto;" >
            <form class="column is-one-third uk-form-stacked">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Title</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" id="title-form" type="text" placeholder="Enter your surveys title:">
                    </div>
                </div>
            </form>
        </div>

        <div class="container columns is-multiline is-centered" style="margin:auto;" >
            <form class="column is-one-third uk-form-stacked">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Description</label>
                    <div class="uk-form-controls">
                        <textarea class="uk-textarea" id="description-form" rows="4" placeholder="Enter your surveys description:"></textarea>
                    </div>
                </div>
            </form>
        </div>

        <div class="container columns is-multiline is-centered" style="margin:auto;">
            <div class="column is-half">
                <div v-for="question in questionList" :key="questionList">
                    <Question v-bind:content="question"/>
                </div>
            </div>
        </div>

        <!-- Add question button -->
        <button class="uk-icon-button" uk-icon="plus-circle; ratio: 3;" type="button"></button>
        <!-- <a href="" class="uk-icon-button" uk-icon="plus-circle; ratio: 3;"></a> -->
        <div class="newQuestion" uk-dropdown="pos: bottom-justify">
            <div class="uk-margin">
                <div class="uk-form-controls uk-form-controls-text uk-text-left">
                    <label><input class="uk-radio" type="radio" name="type" value="multipleChoice" v-model="option"> Mutliple Choice</label><br>
                    <label><input class="uk-radio" type="radio" name="type" value="shortAnswer" v-model="option"> Short Answer</label><br>
                    <label><input class="uk-radio" type="radio" name="type" value="likert" v-model="option"> Likert</label>
                </div>
            </div>

            <button class="uk-button uk-button-primary uk-button-small" @click="addToList()">Create</button>
        </div>

    </div>
</template>

<script>
    import Question from '../components/Question.vue'

    export default {
        name: 'Manage',
        components: {
            Question
        }, data() {
            return {
                questionList: [],
                option: null
            }
        }, methods: {
            addToList: function() {
                if (this.option)
                    this.questionList.push({type: this.option})
                this.option = null
            }
        }
    }
</script>

<style>
    .uk-form-label {
        text-align: left;
    }

    .column, h1 {
        padding-top: 30px;
    }

    #description-form {
        min-height: 20vh;
        text-align: top;
    }
</style>
