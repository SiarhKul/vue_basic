<template>
  <the-navbar></the-navbar>
  <div class='container with-nav'>
    <div class='card'>
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }}| {{ doubleCounter }}</h2>
      <button class='btn' @click='add'>Add</button>
      <button class='btn danger' @click='incrementAsync({ value: 10 })'>Add 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import counter from '@/store/modules/counter';

export default {
  components: { TheNavbar },

  // computed: mapGetters(['count/counter', 'count/doubleCounter', 'uppercaseTitle']),
  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter']),
  },

  methods: {
    ...mapMutations({ add: 'count/increment' }),
    // ...mapActions(['incrementAsync']),
    // add() {
    //   this.$store.commit('increment');
    // },
    ...mapActions('count', ['incrementAsync']),
    // incrementAsync() {
    //   this.$store.dispatch('count/incrementAsync', { value: 10 });
    // },
  },
};
</script>
