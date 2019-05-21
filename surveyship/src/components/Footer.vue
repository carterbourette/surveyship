<template>
    <div class="uk-section uk-section-secondary">
        <div class="columns is-centered">
            <p class="column-is-one">
                Carter Bourette
                <a class="uk-icon-button" uk-icon="world" href="https://carterbourette.com/" target="_blank"/>
            </p>

            <p class="column-is-one">
                Copyright &copy; {{1900+new Date().getYear()}}
            </p>

            <p class="column-is-one">
                <a class="uk-icon-button" uk-icon="world" href="https://ljones.ca/" target="_blank"/>
                 Liam Jones
             </p>
        </div>
    </div>
</template>

<style scoped>
    p {
        margin: 1px 40px;
        font-size: 1.4rem;
    }

    a { margin: 0 10px; }

    .uk-section {
        height: 10vh;
    }
</style>
