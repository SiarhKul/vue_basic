<template>

  <div v-if='cvBlock==="title"'>
    <p>{{ $attrs.value }}</p>
    <h1>{{ cvBlockDescription }}</h1>
  </div>

  <div v-if='cvBlock==="subtitle"'>
    <h2>{{ cvBlockDescription }}</h2>
  </div>

  <div v-if='cvBlock==="avatar"'>
    <img :src='cvBlockDescription' :alt='cvBlock'>
  </div>

  <div v-if='cvBlock==="text"'>
    <p>{{ cvBlockDescription }}</p>
  </div>

</template>

<script>
export default {
  name: 'AppNickName',
  props: ['cvBlock', 'cvBlockDescription'],

};
</script>

<style scoped>

</style>
