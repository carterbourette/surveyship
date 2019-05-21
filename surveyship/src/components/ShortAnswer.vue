<template>
    <div id="newShortAnswer">
        <div v-if="this.mode === 'answering'">
            <textarea class="uk-form-controls uk-textarea" v-model="question.response"
                      rows="4" placeholder="Enter your answer here"/>
        </div>
        <div v-else>
            <QuestionManager/>
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

<style scoped>
    textarea {
        min-height: 20vh;
        min-width: 100%;
        font-size: 1.25rem;
    }
</style>
