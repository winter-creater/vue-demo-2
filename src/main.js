
import Vue from 'vue'
import Demo from './Demo.vue'


new Vue({
    // el: '#app',
    render(h) {
        return h(Demo)
    }
}).$mount('#app')

