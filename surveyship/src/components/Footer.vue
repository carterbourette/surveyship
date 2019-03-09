<template>
    <div id="app">
        <div class="uk-section uk-section-secondary uk-light">
            <div class="uk-container">
                <div class="columns is-centered">
                    <div class="column-is-one">
                        <p>Carter Bourette <a class="uk-icon-button" uk-icon="world" href="https://carterbourette.com/" target="_blank"></a></p>
                    </div>

                    <p class="column-is-one"> Copyright &copy; 2019 </p>

                    <div class="column-is-one">
                        <p><a class="uk-icon-button" uk-icon="world" href="https://ljones.ca/" target="_blank"></a> Liam Jones</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Footer',
        components: {
        },
        data() {
            return {
            }
        }
    }
</script>

<style>
    .uk-section {
        padding: 4em;
        margin-top: 10em;
    }

    p {
        margin: 1px 40px;
        font-size: 1.4rem;
    }
</style>
