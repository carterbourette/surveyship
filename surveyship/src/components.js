import Vue from 'vue'

// Pages
Vue.component('Dashboard',    require('@/pages/Dashboard.vue'));
Vue.component('Manage',       require('@/pages/Manage.vue'));
Vue.component('Survey',       require('@/pages/Survey.vue'));


// Common components
Vue.component('Card',         require('@/components/Card.vue'));
Vue.component('Footer',       require('@/components/Footer.vue'));
Vue.component('Navbar',       require('@/components/Navbar.vue'));


// Question Types
Vue.component('QuestionBase',   require('@/questionTypes/QuestionManager.vue'));
Vue.component('Checkbox',       require('@/questionTypes/Checkbox.vue'));
Vue.component('RadioButton',    require('@/questionTypes/RadioButton.vue'));
Vue.component('ShortAnswer',    require('@/questionTypes/ShortAnswer.vue'));
