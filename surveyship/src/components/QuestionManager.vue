<template>
    <div class="newQuestion">
        <hr>

        <!-- Question Form -->
        <label class="uk-form-label uk-text-left" for="form-stacked-text">Question</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="title-form" type="text" placeholder="Enter your question:">
        </div>

        <!-- input Form -->
        <div v-if="content">
            <!-- Display radio buttons if the content.type is multiple choice -->
            <div v-if="content.type === 'multipleChoice'">
                <div class="uk-margin">
                    <div class="uk-form-controls uk-form-controls-text uk-text-left">
                        <div v-for="radio in list">
                            <RadioButton v-bind:id="{edit: true, id: null, option: radio}"/>
                        </div>

                        <button class="uk-button uk-button-primary uk-button-small" type="button" @click="addButton()">Add Option</button>
                    </div>
                </div>
            </div>

            <!-- Display text boxes if the content.type is short answer -->
            <div class="" v-if="content.type === 'shortAnswer'">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Answer</label>
                    <div class="uk-form-controls">
                        <textarea class="uk-textarea" id="description-form" rows="4" placeholder="Enter your answer here"></textarea>
                    </div>
                </div>
            </div>

            <div v-if="content.type == 'checkbox'">
                <div class="uk-margin">
                    <div class="uk-form-controls uk-form-controls-text uk-text-left">
                        <div v-for="checkbox in list">
                            <Checkbox v-bind:id="{edit: true, id: null, option: checkbox}"/>
                        </div>

                        <button class="uk-button uk-button-primary uk-button-small" type="button" @click="addButton()">Add Option</button>
                    </div>
                </div>
            </div>

            <!-- Display a likert scale if the content.type is likert -->
            <!-- <div class="" v-if="content.type === 'likert'">
        </div> -->
        </div>
    </div>
</template>

<script>
import RadioButton from './RadioButton.vue'
import Checkbox from './Checkbox.vue'

export default {
    name: 'QuestionManager',
    props: ['content'],
    components: {
        RadioButton
    }, data() {
            return {
                list: []
            }
    }, methods: {
        addButton: function() {
            this.list.push("")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .uk-button {
        padding: 5px;
    }
</style>
