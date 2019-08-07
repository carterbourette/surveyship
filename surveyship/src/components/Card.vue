<template>
    <div class="uk-card-default uk-box-shadow-hover-xlarge">
        <h2 class="uk-card-header uk-card-title">{{survey.title}}</h2>

        <div class="uk-card-body">{{survey.desc}}</div>
        <div class="uk-card-footer uk-button-group">
            <a href="#" >
                <button class="uk-button uk-button-primary" @click="emitSignal('manage')">
                    Manage <span uk-icon="cog"/>
                </button>
                <button class="uk-button uk-button-primary" @click="emitSignal('answer')">
                    <span uk-icon="file-edit"/> Answer
                </button>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['survey'],
        methods: {
            emitSignal(mode) {
                this.$bus.$emit(mode, this.survey)
            }
        }
    }
</script>

<style scoped>
    .uk-card-default {
        background-image: url('../assets/snow.png');
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }

    .uk-card-body {
        padding: 0;
        margin: 5%;
        height: 110px;
        line-height: 140%;
        font-size: 1.25rem;

        overflow: hidden;
        text-overflow: ellipsis;
    }

    a {
        color: white;
    }
</style>
