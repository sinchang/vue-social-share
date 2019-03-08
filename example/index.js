import Vue from 'vue'
import App from './App.vue'
import { WeiboShareButton } from "../src/index.js";

Vue.use(WeiboShareButton)

new Vue({
  el: '#app',
  render: h => h(App)
})
