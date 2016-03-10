# vue-modal
A very simple modal component for use with VueJS.

It requires Webpack and Babel to run, i'm open to PRs for extending support for other use cases.

# Setup
```
import VueModal from 'vue-modal'
...
Vue.use(VueModal)
```

# Usage
```
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
```

The modal content is not styled in anyway, it is up to you to bring your own code ;)
