import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Create an event bus for global events
const EventBus = new Vue();

/*
 * By extending the Vue prototype with a new $bus property
 * we can easily access our global event bus from any child component
 *
 * We can use the code below to add additional properties into Vue, if needed
 */
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function() {
            return EventBus;
        }
    }
});

require('./components.js');

new Vue({
  render: h => h(App),
}).$mount('#app')
