import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';


import StoreOptions from './stores/store';
import RouterOptions from './router/router';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(RouterOptions);
const store = new Vuex.Store(StoreOptions);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
