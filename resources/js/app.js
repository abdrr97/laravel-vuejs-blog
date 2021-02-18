require('./bootstrap');

import Vue from "vue";
import router from "./router";

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false

Vue.use(ViewUI)

import common from "./common";
Vue.mixin(common)

Vue.component('app', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    router,
    // mixins: common
});


/* ------------ */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))
