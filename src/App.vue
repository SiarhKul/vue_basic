<template>
  <div class='container'>
    <div class='card'>Plugins

      <h1>{{ $i18n('app.title') }}</h1>
      <button class='btn' @click='$alert("working")'>Alert</button>
      <button class='btn' @click='changeLanguage'>{{$i18n("app.changeBtn")}}</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  inject: ['changeI18n'],
  methods: {
    changeLanguage() {
      this.changeI18n('en');
      this.$forceUpdate();
    },
  },
};
</script>

