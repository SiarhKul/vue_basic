<template>
  <div class='container pt-1'>
    <div class='card'>
      <h2>Slots</h2>
    </div>
    <app-list>
      <template #default='slotProps'>
        <span style='color: red'>{{ slotProps.iter }}</span>
      </template>
    </app-list>
    <app-block>
      <p>Text for slot from App</p>

      <template #header>
        <h3>This is heading from App</h3>
      </template>

      <template #footer>
        <hr>
        <small>Thi is footer from App</small>
      </template>

    </app-block>
  </div>
</template>

<script>
import AppBlock from '@/AppBlock';
import AppList from '@/AppList';

export default {
  name: 'App',
  components: { AppBlock, AppList },
};
</script>

<style scoped>
</style>
