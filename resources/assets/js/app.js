
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//initial vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// Vue.component('example-component', require('./components/ExampleComponent.vue'));,

let routes = [
    { path: '/dashbord', component: require('./components/Dashboard') },
    { path: '/profile', component: require('./components/Profile') }
]

const router = new VueRouter({
    mode:'history',
    routes // short for `routes: routes`
})
const app = new Vue({
    el: '#app',
    router
});
