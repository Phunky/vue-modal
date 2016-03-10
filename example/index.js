import Vue from 'vue'
import VueModal from '../dist/vue-modal.js'
import App from './App.vue'

console.log(VueModal)

Vue.use(VueModal)

new Vue({
  el: 'body',
  components: {
    app: App
  }
})
