// import Vue from 'vue'
// import App from './App.vue'
import Vue from 'vue'
import Demo from './Demo.vue'
// console.log(Demo);
console.log(Demo.render.toString());

new Vue({
    el: '#app',
    render(h) {
        return h(Demo)
    }
})

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
