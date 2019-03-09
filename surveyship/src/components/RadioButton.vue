<template>
    <div class="newRadioButton">
        <div v-if="content.edit == true">
            <input class="uk-radio" type="radio" disabled>
            <input class="uk-input uk-form-blank uk-form-width-medium" type="text" placeholder="Enter an option here">
        </div>

        <div v-else>
            <label><input @change="handleInput" :value="content.option" class="uk-radio" type="radio" :name="content.id"> {{ content.option }}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RadioButton',
        props:['content'],
        methods: {
            handleInput(e) {
                // console.log('in here', this.value);
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
