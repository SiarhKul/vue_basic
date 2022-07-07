<template>
  <div class='card'>
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }} | {{ doubleVersion }}</strong></p>
    <h2>Название: <strong>{{ nameProv }}</strong></h2>
    <h2>Версия: <strong>{{ versionProve }} | {{ doubleVersion }}</strong></h2>

  </div>
  <button class='btn warning' @click='changeToThree'> Change to 3 version</button>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  name: 'FrameWorkInfo',
  props: ['name', 'version'],
  emits: ['change-version'],
  setup(props, context) {
    function change() {
      context.emit('change-version', 3);
    }

    // const nameProve = inject('nameProve');
    const versionProve = inject('versionProv');

    return {
      nameProv: inject('nameProv'),
      versionProve,
      changeToThree: change,
      doubleVersion: computed(() => props.version * 2),
    };
  },
};
</script>

<style scoped>

</style>
