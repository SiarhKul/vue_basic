<template>
  <div class='container'>
    <app-alert v-if='alert' text='It is important!' title='Attraction!' type='danger' closable
               @close='alert=false'></app-alert>
    <div class='card'>
      <button class='btn primary' @click='toggleAlert'>{{ alert ? 'Hide' : 'Show' }}</button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from '@/components/AppAlert';
import AppBlock from '@/components/AppBlock';
import AlertMixin from '@/AlertMixin';

export default {
  name: 'App',
  components: { AppAlert, AppBlock },
  mixins: [AlertMixin],

};
</script>
