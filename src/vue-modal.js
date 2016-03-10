import modal from './v-modal.vue'

export default {
  install: function (Vue, options = {}) {
    Vue.component('v-modal', modal)
  }
}

