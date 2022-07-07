<template>
  <header class='navbar'>
    Vuex {{ counter }}
    <button class='btn primary' @click='add'>Add</button>
  </header>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
  methods: {
    add() {
      this.$store.commit('add', 5);
      // this.$store.commit({
      //   type: 'add',
      //   value: 5,
      // });

    },
  },
};
</script>
