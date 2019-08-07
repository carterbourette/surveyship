<template>
    <div id="Dashboard">
        <h1>Welcome to Surveyship</h1>
        <h3>Learn more from your surveys.</h3>
        <br>
        <img src="@/assets/fakeIcon.png" alt="Logo" id='logo'>

        <!-- dynamic div for live surveys -->
        <div class="spacing" id="publicSurveys">
            <div class="container columns is-multiline" style="margin:auto;">
                <h4 class="column is-full"><b class="fire-me-up">Live Surveys</b></h4>

                <div v-for="card in cards.live" :key="card.title" class="column is-one-third">
                    <Card :survey="card" />
                </div>
            </div>
        </div>

        <!-- Dynamic div for private/hidden stories -->
        <div class="spacing" id="privateSurveys">
            <div class="container columns is-multiline" style="margin:auto;">
                <h4 class="column is-full"><b class="fire-me-up">Private Surveys</b></h4>

                <div v-for="card in cards.private" :key="card.title" class="column is-one-third">
                    <Card :survey="card" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
    name: 'Dashboard',
    components: {
        Card
    },
    data() {
        return {
            cards: {
                live:[{
                    title: 'Colours',
                    desc: 'This survey will ask you a series of questions to get to know your favourite colour.',
                    questions: [{
                            type: 'Checkbox',
                            title: 'What is your gender? (Check all that apply)',
                            questionNumber: 0,
                            options: [
                                'Male',
                                'Female',
                                'Both',
                                ''
                            ],
                            response: null
                        }, {
                            type: 'Checkbox',
                            title: 'What is your age?',
                            questionNumber: 0,
                            options: [
                                '10',
                                '20',
                                '30',
                                '40',
                                ''
                            ],
                            response: null
                        }, {
                            type: 'shortAnswer',
                            title: 'What is your favourite colour?',
                            questionNumber: 0,
                            options: [],
                            response: null
                        }, {
                            type: 'shortAnswer',
                            title: 'What is your favourite colour2?',
                            questionNumber: 0,
                            options: [],
                            response: null
                        }, {
                            type: 'RadioButton',
                            title: 'What is your favourite animal?',
                            questionNumber: 0,
                            options: [
                                'Dog',
                                'Cat',
                                'Pig',
                                ''
                            ],
                            response: null
                        }, {
                            type: 'RadioButton',
                            title: 'What is your favourite food?',
                            questionNumber: 0,
                            options: [
                                'Ribs',
                                'Hamburger',
                                'Salad',
                                'KD',
                                ''
                            ],
                            response: null
                        }
                    ]
                    },
                    { title: "Live 1", desc: "Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Jaguar shark! So tell me - does it really exist? Must go faster... go, go, go, go, go! Must go faster. What do they got in there? King Kong? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.", questions: [] },
                    { title: "Live 2", desc: "Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yes, Yes, without the oops! Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, take a look at the earthlings. Goodbye! Did he just throw my cat out of the window?", questions: [] },
                    { title: "Live 3", desc: "Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! I gave it a cold? I gave it a virus. A computer virus. What do they got in there? King Kong? Do you have any idea how long it takes those cups to decompose. Life finds a way.", questions: [] },
                    { title: "Live 4", desc: "So you two dig up, dig up dinosaurs? Hey, take a look at the earthlings. Goodbye! You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! I was part of something special. Life finds a way. Do you have any idea how long it takes those cups to decompose.", questions: [] },
                ],
                private:[
                    { title: "Private 1", desc: "This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. I was part of something special. Jaguar shark! So tell me - does it really exist? Life finds a way. So you two dig up, dig up dinosaurs? So you two dig up, dig up dinosaurs?", questions: [] },
                    { title: "Private 2", desc: "Yes, Yes, without the oops! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. So you two dig up, dig up dinosaurs? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.", questions: [] },
                ]
            }
        }
    },
    methods: {
        setIndices(survey) {
            // Map each of the questions in the survey to an index (incrementing index)
            survey.questions.map((question, index) => question.questionNumber = index)
        }
    }
}
</script>

<style scoped>
    #Dashboard {
        background-image: url('../assets/shattered.png');

        text-align: center;
    }

    .spacing {
        padding: 75px 0;
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

    #logo { width: 13em;}

    h1 {
        font-size: 4.5rem;
        padding-top: 30px;
    }
    h3 { font-size: 2.5rem; }
    h4 {
        text-align: left;
        font-size: 2.3rem;
        margin: 0;
        padding: 0;
    }
</style>
