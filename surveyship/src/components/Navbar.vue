<template>
    <div id="Navbar">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
            <nav class="uk-navbar-container uk-margin" uk-navbar>
                <div class="nav-overlay uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" @click="goHome()"><img src="@/assets/fakeIcon.png" alt="Logo"></a>
                    <ul class="uk-navbar-nav">
                        <li><a class="size" @click="goHome()" href="#">Home</a></li>
                        <li><a class="size" href="#publicSurveys">Public Surveys</a></li>
                        <li><a class="size" href="#privateSurveys">Private Surveys</a></li>
                    </ul>
                </div>
                <div class="nav-overlay uk-navbar-right">
                    <a class="uk-navbar-toggle" uk-search-icon uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                </div>
                <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
                    <div class="uk-navbar-item uk-width-expand">
                        <form class="uk-search uk-search-navbar uk-width-1-1">
                            <input class="uk-search-input" type="search" placeholder="Search..." autofocus>
                        </form>
                    </div>
                    <a class="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Navbar',
    methods: {
        goHome() {
            this.$bus.$emit('manage', null)
            this.$bus.$emit('answer', null)
        }
    }
}
</script>

<style scoped>
    #Navbar  { height: 10vh; }
    .uk-logo { width: 5em; }
    .size    { font-size: 1.2rem; }
</style>
