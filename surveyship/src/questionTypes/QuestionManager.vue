<template>
    <div class="newQuestion">
        <hr>

        <!-- Question Form -->
        <div class="columns">
            <label class="column uk-form-label uk-text-left">
                Question {{$parent.question.questionNumber}}: {{$parent.question.type}}
            </label>

            <div class="column is-1">
                <a  class="uk-icon-button" uk-icon="trash" @click="$bus.$emit('deleteQuestion', $parent.question.questionNumber)"/>
            </div>
        </div>

        <div class="columns">
            <input class="column uk-input" v-model="$parent.question.title" id="title-form" type="text" placeholder="Enter your question:">
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuestionManager',
    props: ['question', 'mode'],
    data() {
        return {
            trashIndex: null
        }
    },
    methods: {
        checkForEmpty() {
            // Ensure there is always an empty option to add new ones
            if (this.question.options && this.question.options[this.question.options.length-1] !== "")
                this.question.options.push("")
        },
        deleteOption(index) {
            if (index >= 0 && index < this.question.options.length)
                if (confirm("Are you sure you want to delete this option?"))
                    this.question.options.splice(index, 1)
        }
    },
    watch: {
        'question.options': function() {
            this.checkForEmpty()
        }
    }
}
</script>

<style scoped>
    label {
        font-size: 1.5rem;
    }

    hr {
        margin: 100px;
        border-color: black;
    }
</style>
