const Vue = window.Vue

Vue.config.productionTip = false

new Vue({
    // data: function () {
    //     return {
    //         n: 0
    //     }
    // },
    // 以下是ES6写法
    data() {
        return {
            n: 0
        }
    },
    template: `
    <div class="red">
    {{n}}
    <button @click="add">+1</button>
</div>
    `,
    methods: {
        add() {
            this.n += 1
        }
    }
}).$mount('#app')

