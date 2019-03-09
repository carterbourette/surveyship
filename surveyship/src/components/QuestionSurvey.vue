<template>
    <div class="newQuestion">
        <hr>

        <!-- Question Title -->
        <label class="uk-form-label uk-text-left" for="form-stacked-text">{{ content.title }}</label>

        <!-- input Form -->
        <div v-if="content">
            <!-- Display radio buttons if the content.type is multiple choice -->
            <div v-if="content.type === 'multipleChoice'">
                <div v-for="radio in content.options">
                    <RadioButton @input="fire" v-model="response" v-bind:content="{edit: false, id: content.title, option: radio}"/>
                </div>
            </div>

            <!-- Display text boxes if the content.type is short answer -->
            <div class="" v-if="content.type === 'shortAnswer'">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Answer</label>
                    <div class="uk-form-controls">
                        <textarea @input="$emit('input', $event.target.value)" v-model="response" class="uk-textarea" id="description-form" rows="4" placeholder="Enter your answer here"></textarea>
                    </div>
                </div>
            </div>

            <!-- Display check boxes if the content.type is checkbox -->
            <div v-if="content.type === 'checkbox'">
                <Checkbox @input="fire" v-model="response" v-bind:content="{edit: false, id: content.title, options: content.options}"/>
            </div>


            <!-- {{ response }} -->
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
        RadioButton,
        Checkbox
    }, data() {
        return {
            response: null
        }
    },
    methods:{
        fire: function (e) {
            this.$emit('input', e)
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
