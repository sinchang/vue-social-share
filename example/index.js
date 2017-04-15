import Vue from 'vue'
import App from './App.vue'
import Share from '../src/index.js'

Vue.use(Share)

new Vue({
  el: '#app',
  render: h => h(App)
})
