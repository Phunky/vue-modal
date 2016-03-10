<template>
  <div>
    <div class="v-modal" v-if="visible">
      <div class="overlay" @click.stop="hide"></div>
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    },
    toggle () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="sass" scoped>
  .v-modal {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  }

  .container {
    z-index: 1;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.14)
  }
</style>
