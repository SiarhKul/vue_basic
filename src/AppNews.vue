<template>
  <div class='card'>
    <h3>{{ title }}</h3>
    <app-button @action='open'>{{ isNewOpen ? 'Close' : 'Open' }}</app-button>
    <app-button v-if='wasRead' color='danger' @action='$emit("unmark",id)'>Mark as unread</app-button>
    <div v-if='isNewOpen'>
      <hr>
      <p>{{ title }}----{{ id }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, minima.</p>
      <app-button color='primary' @action='mark' v-if='!wasRead'>Read news</app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from '@/AppButton';
import AppNewsList from '@/AppNewsList';

export default {
  data() {
    return {
      isNewOpen: this.isOpen,
    };
  },
  methods: {
    // unmark() {
    //   this.$emit('unmark', this.id);
    // },
    mark() {
      this.isNewOpen = false;
      this.$emit('read-news', this.id);
    },
    open() {
      this.isNewOpen = !this.isNewOpen;
      if (this.isNewOpen) {

        this.$emit('open-news', 42);
      }
    },
  },
  props: {
    wasRead: Boolean,
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
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true;
      }
      console.warn('no id for  read-news');
    },
    'unmark': null,
  },
  components: { AppButton, AppNewsList },
};
</script>
