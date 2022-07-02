<template>
  <div class='container'>
    <div class='card'>Plugins

      <h1>{{ $i18n('app.title') }}</h1>
      <button class='btn' @click='$alert("working")'>Alert</button>
      <button class='btn' @click='changeLanguage'>{{ $i18n('app.changeBtn') }}</button>
      <button class='btn primary' @click='modal=true'>Open modal</button>
      <teleport to='#modal'>
        <app-modal v-if='modal' @close='modal=false'></app-modal>
      </teleport>
    </div>

  </div>
</template>

<script>
import AppModal from './AppModal';

export default {
  name: 'App',
  inject: ['changeI18n'],
  data() {
    return {
      modal: false,
    };
  },
  components: { AppModal },
  methods: {
    changeLanguage() {
      this.changeI18n('en');
      this.$forceUpdate();
    },
  },
};
</script>

