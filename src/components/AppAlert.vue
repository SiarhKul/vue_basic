<template>
  <div class='alert' :class='type'>
    <p class='alert-title'>{{ title }}</p>
    <p>{{ text }}</p>
    <button v-if='closable' :class='type' class='btn' @click='$emit("close")'>Close</button>
  </div>
</template>

<script>
export default {
  name: 'AppAlert',
  emits: ['close'],
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      default: false,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'danger', 'warning'].includes(value);
      },
    },
  },
};
</script>

<style scoped>

</style>
