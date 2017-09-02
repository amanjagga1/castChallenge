import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'
import vueRouter from 'vue-router'
import { routes } from './routes.js'



Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
