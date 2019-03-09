<template>
    <div class="newCheckbox">
        <div v-for="checkbox in content.options">
            <div v-if="content.edit == true">
                <input class="uk-checkbox" type="checkbox" disabled>
                <input class="uk-input uk-form-blank uk-form-width-medium" type="text" placeholder="Enter an option here">
            </div>

            <div v-else>
                <label><input v-model="value" @change="handleInput" :value="checkbox" class="uk-checkbox" type="checkbox" :name="content.id"> {{ checkbox }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Checkbox',
        props:['content'],
        data() {
            return {
                value: []
            }
        },
        methods: {
            handleInput(e) {
                this.$emit('input', this.value)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
