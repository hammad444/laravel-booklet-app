import router from './routes'
import VueRouter from 'vue-router'
import Vue from 'vue';
import Index from './Index.vue';

require('./bootstrap');

window.Vue = require('vue').default;

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    components:{
        "index":Index
    }
});

// app.$mount('#app')

// app.use(Routes);
