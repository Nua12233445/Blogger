import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Router from './routes.js'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
