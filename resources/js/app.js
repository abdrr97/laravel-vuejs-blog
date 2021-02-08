require('./bootstrap');

import Vue from "vue";
import router from "./router";
// import User from "./components/User/User.vue"


Vue.component('app', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    // components: {
    //     User
    // },
    router
});


/* ------------ */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))
