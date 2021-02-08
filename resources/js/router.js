import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// components
import User from "./components/User/User.vue"

const routes = [
    {
        path: '/vue-router',
        component: User,
    }
]


export default new Router({
    mode: 'history',
    routes
})