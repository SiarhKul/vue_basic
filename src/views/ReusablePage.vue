<template>
  <app-alert v-if='alert' title='Work with composition' type='primary' @close='close'></app-alert>
  <div class='card'>
    <h1>Reusable</h1>

    <button class='btn primary' @click='toggle'>{{ alert ? 'Close' : 'Show' }} message</button>
    <button class='btn' @click='navigate'>Move to main</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import AppAlert from '@/views/AppAlert';
import { useAlert } from '@/use';
import { reactive } from 'vue';

export default {
  name: 'ReusablePage',

  setup() {


    // const { alert, close, toggle } = useAlert();
    // const [simpleAlert, toggle, close] = useAlert();
    const router = useRouter();
    const route = useRoute();


    const navigate = () => router.push('/');

    return {
      ...useAlert(),
      // toggle,
      // close,
      // alert,
      navigate,
    };
  },
  components: { AppAlert },
};

</script>

<style scoped>

</style>
