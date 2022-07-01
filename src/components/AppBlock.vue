<template>
  <div class='container'>
    <app-alert v-if='alert' text='It is important!' title='Attraction!' type='primary'
               @close='alert=false'></app-alert>
    <div class='card'>
      <button class='btn primary' @click='toggleAlert'>{{ alert ? 'Hide' : 'Show' }}</button>
    </div>
  </div>
</template>

<script>

import AppAlert from './AppAlert';
import AlertMixin from '@/AlertMixin';

export default {
  name: 'AppBlock',
  components: { AppAlert },
  mixins: [AlertMixin],

};
</script>

