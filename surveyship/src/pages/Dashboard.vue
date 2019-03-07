<template>
    <div id="app">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
            <nav class="uk-navbar-container uk-margin" uk-navbar>
                <div class="nav-overlay uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="#"><img src="@/assets/fakeIcon.png" alt="Logo"></a>
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="#publicSurveys">Public Surveys</a></li>
                        <li class="uk-active"><a href="#privateSurveys">Private Surveys</a></li>
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

        <h1>Welcome to Surveyship.</h1>
        <br>
        <h3>Your go to source for distributing surveys with reliable user data</h3>

        <!-- dynamic div for live surveys -->
        <div class="container columns is-multiline" style="margin:auto;" id="publicSurveys">
            <h4 class="column is-full">Live Surveys</h4>
            <div class="column is-full uk-divider-icon"></div>

            <div v-for="card in cards.live" :key="card.title" class="column is-full-mobile is-one-half-tablet is-one-third-desktop
                                                          is-one-third-widescreen is-one-third-fullhd">
                <Card v-bind:content="card" />
            </div>
        </div>

        <!-- Dynamic div for private/hidden stories -->
        <div class="container columns is-multiline" style="margin:auto;" id="privateSurveys">
            <h4 class="column is-full">Private Surveys</h4>
            <div class="column is-full uk-divider-icon"></div>

            <div v-for="card in cards.private" :key="card.title" class="column is-full-mobile is-one-half-tablet is-one-third-desktop
                                                             is-one-third-widescreen is-one-third-fullhd">
                <Card v-bind:content="card" />
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '../components/Card.vue'

    export default {
        name: 'Dashboard',
        components: {
            Card
        }, data() {
            return {
                cards: {
                    live:[
                        { title: "Live 1", body:  "Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Jaguar shark! So tell me - does it really exist? Must go faster... go, go, go, go, go! Must go faster. What do they got in there? King Kong? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists." },
                        { title: "Live 2", body:  "Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yes, Yes, without the oops! Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, take a look at the earthlings. Goodbye! Did he just throw my cat out of the window?" },
                        { title: "Live 3", body:  "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! I gave it a cold? I gave it a virus. A computer virus. What do they got in there? King Kong? Do you have any idea how long it takes those cups to decompose. Life finds a way." },
                        { title: "Live 4", body:  "So you two dig up, dig up dinosaurs? Hey, take a look at the earthlings. Goodbye! You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! I was part of something special. Life finds a way. Do you have any idea how long it takes those cups to decompose." },
                        { title: "Live 4", body:  "test" }
                    ],
                    private:[
                        { title: "Private 1", body:  "This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. I was part of something special. Jaguar shark! So tell me - does it really exist? Life finds a way. So you two dig up, dig up dinosaurs? So you two dig up, dig up dinosaurs?" },
                        { title: "Private 2", body:  "Yes, Yes, without the oops! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. So you two dig up, dig up dinosaurs? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows." },
                    ]
                }
            }
        }
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .uk-logo {
        width: 130px;
    }

    h1 h3 h4 div {
        font-family: 'BenchNine', sans-serif;
    }

    h4 {
        /* text-align: left; */
        font-size: 2rem;
        margin-top:100px;
    }
</style>
