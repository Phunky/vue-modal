<template>
  <div class="app">
    <button class="ui button" @click="$refs.modal.show">Show modal</button>

    <v-modal v-ref:modal>

      <div class="ui segments">
        <div class="ui segment">
          <h3 class="ui header">Modal header</h3>
        </div>
        <div class="ui segment content">
          <p>Content</p>
        </div>
        <div class="ui segment">
          <button class="ui button" @click="$refs.modal.hide">Hide modal</button>
        </div>
      </div>

    </v-modal>

  </div>
</template>

<style lang="sass">

  body {
    margin: 1em;
  }

  .ui.segment.content {
    width: 500px;
    padding: 2em;
  }

</style>
