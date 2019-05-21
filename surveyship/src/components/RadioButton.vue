<template>
    <div id="newRadioButton">
        <div v-if="this.mode === 'answering'">
            <div v-for="radio in question.options" v-bind:key="radio">
                <label v-if="radio !== ''">
                    <input class="uk-radio" type="radio" :value="radio" :name="question.title"
                           v-model="question.response"> {{ radio }}
                </label>
            </div>
        </div>
        <div v-else>
            <QuestionManager/>
            <div v-for="(radio, index) in this.question.options" v-bind:key="radio">
                <div class="columns" @mouseover="trashIndex = index" @mouseleave="trashIndex = null">
                    <div class="column">
                        <input class="uk-radio" type="radio" disabled>
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
        components: { QuestionManager }
    }
</script>
