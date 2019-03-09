<template>
    <div id="app">
        <Navbar/>

        <h1>Welcome to Surveyship.</h1>
        <h3>Learn more from your surveys</h3>
        <br>
        <img src="@/assets/fakeIcon.png" alt="Logo" id='logo'>

        <!-- dynamic div for live surveys -->
        <div class="container columns is-multiline" style="margin:auto;" id="publicSurveys">
            <h4 class="column is-full "><b class="fire-me-up">Live Surveys</b></h4>
            <!-- <h4 class="column is-full">Live Surveys</h4> -->
            <!-- <div class="column is-full uk-divider-icon"></div> -->

            <div v-for="card in cards.live" :key="card.title" class="column is-full-mobile is-one-half-tablet is-one-third-desktop
                                                                            is-one-third-widescreen is-one-third-fullhd">
                <Card v-bind:content="card" />
            </div>
        </div>

        <div class="uk-divider-icon"></div>

        <!-- Dynamic div for private/hidden stories -->
        <div class="container columns is-multiline" style="margin:auto;" id="privateSurveys">
            <h4 class="column is-full "><b class="fire-me-up">Private  Surveys</b></h4>

            <div v-for="card in cards.private" :key="card.title" class="column is-full-mobile is-one-half-tablet is-one-third-desktop
                                                                               is-one-third-widescreen is-one-third-fullhd">
                <Card v-bind:content="card" />
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Card from '../components/Card.vue'
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'Dashboard',
        components: {
            Card,
            Navbar,
            Footer
        }, data() {
            return {
                cards: {
                    live:[
                        { title: "Live 1", body:  "Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Jaguar shark! So tell me - does it really exist? Must go faster... go, go, go, go, go! Must go faster. What do they got in there? King Kong? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists." },
                        { title: "Live 2", body:  "Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yes, Yes, without the oops! Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, take a look at the earthlings. Goodbye! Did he just throw my cat out of the window?" },
                        { title: "Live 3", body:  "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! I gave it a cold? I gave it a virus. A computer virus. What do they got in there? King Kong? Do you have any idea how long it takes those cups to decompose. Life finds a way." },
                        { title: "Live 4", body:  "So you two dig up, dig up dinosaurs? Hey, take a look at the earthlings. Goodbye! You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! I was part of something special. Life finds a way. Do you have any idea how long it takes those cups to decompose." },
                        { title: "Live 5", body:  "test" }
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

<style scoped>
    #app {
        background-image: url('../assets/shattered.png');

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .fire-me-up::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        z-index: -1;
        margin-top: 12px;
        margin-right: -4px;
        margin-bottom: 4px;
        margin-left: -8px;
        background-color: #87D68D;
        border-top-left-radius: 8px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 20px;
        transform: skewX(-20deg) skewY(-2deg);
    }

    .fire-me-up {
        position: relative;
        z-index: 9;
    }
/*
    h4:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -1em;
        width: calc(100% + 2em);
        height: 1px;
        z-index: -1;
        background: #c8cccf;
    } */


    #logo { width: 13em;}

    h1 { font-size: 4.5rem; }
    h3 { font-size: 2.5rem; }

    h4 {
        text-align: left;
        font-size: 2.3rem;
        margin:100px 0 0 0;
        padding: 0px;

        /* -webkit-box-shadow: inset 0 -6px 0 rgba(255,74,110,.2);
        box-shadow: inset 0 -6px 0 rgba(255,74,110,.2); */

        /* position: relative; */
}
</style>
