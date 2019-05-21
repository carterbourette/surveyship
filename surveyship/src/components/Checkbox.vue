<template>
    <div id="newCheckbox">
        <div v-if="this.mode === 'answering'">
            <div v-for="(checkbox, index) in question.options">
                <label v-if="checkbox !== ''">
                    <input class="uk-checkbox" type="checkbox" :name="question.questionNumber"
                           v-model="question.response[index].response"> {{ checkbox }}
                </label>
            </div>
        </div>
        <div v-else>
            <QuestionManager/>

            <div v-for="(radio, index) in this.question.options">
                <div class="columns" @mouseover="trashIndex = index" @mouseleave="trashIndex = null">
                    <div class="column">
                        <input class="uk-checkbox" type="checkbox" disabled>
                        <input class="uk-input uk-form-blank uk-form-width-large" type="text"
                               placeholder="Enter an option here" v-model="question.options[index]">
                   </div>

                    <div class="column is-1">
                        <a class="uk-icon-button" uk-icon="trash" @click="deleteOption(index)"
                           v-show="trashIndex === index && index < question.options.length-1"/>
                    </div>

                    <div class="column is-1"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionManager from './QuestionManager.vue'
export default {
    extends: QuestionManager,
    components: { QuestionManager },
    created: function() {
        /* Clone the options array to the response and map every index
        to an object containing the object name and default of false */
        if (this.mode === 'answering' && this.question.response == null)
            this.question.response = [...this.question.options].map(index =>
                                        index = {option: index, response: false })
    }
}
</script>
