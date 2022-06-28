<template>
  <div class='card'>
    <h3>{{ title }}</h3>
    <button class='btn' @click='open'>{{ isNewOpen ? 'Close' : 'Open' }}</button>
    <p v-if='isNewOpen'>{{ title }}----{{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNewOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewOpen = !this.isNewOpen;
      if (this.isNewOpen) {

        this.$emit('open-news', 42);
      }
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false;
      },
    },
  },
  // emits: ['open-news'],
  emits: {
    'open-news'(num) {
      if (num) {
        return true;
      }
      console.warn('no data  open-news');
    },
  },
};
</script>
