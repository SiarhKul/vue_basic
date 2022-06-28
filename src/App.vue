<template>
  <div class='container pt-1'>
    <div class='card'>
      <h2>Actual news{{ now }}</h2>
      <span> Open times:{{ openRate }}</span>
    </div>
    <app-news v-for='item in news'
              :key='item.id'
              :title='item.title'
              :id='item.id'
              :is-open='item.isOpen'
              @open-news='openNews'
    ></app-news>
  </div>
</template>

<script>
import AppNews from '@/AppNews';

export default {
  name: 'App',
  components: {
    AppNews,
  },

  data() {
    return {
      openRate: 0,
      now: new Date().toLocaleTimeString(),
      isOpen: false,
      news: [
        { title: 'News1', id: 1, isOpen: false },
        { title: 'News2', id: 2, isOpen: false },
      ],
    };
  },
  methods: {
    openNews(data) {
      console.log('data----->>', data);
      this.openRate++;
    },
  },
};
</script>

<style></style>
