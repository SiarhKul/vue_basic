<template>
  <div class='container pt-1'>
    <div class='card'>
      <h2>Actual news{{ now }}</h2>
      <span> Open times:{{ openRate }} | Read :{{ readRate }}</span>
    </div>
    <app-news v-for='item in news'
              :key='item.id'
              :title='item.title'
              :id='item.id'
              :is-open='item.isOpen'
              :was-read='item.wasRead'
              @open-news='openNews'
              @read-news='readNews'
              @unmark='unreadNews'
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
      readRate: 0,
      openRate: 0,
      now: new Date().toLocaleTimeString(),
      isOpen: false,
      news: [
        { title: 'COD MV2 is coming', id: 1, isOpen: false, wasRead: false },
        { title: 'The Times provides more game info', id: 2, isOpen: false, wasRead: false },
      ],
    };
  },
  methods: {
    unreadNews(id) {
      const news = this.news.find(news => news.id === id);
      news.wasRead = false;
      this.readRate--;

    },

    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id);

      this.news[idx].wasRead = true;
      this.readRate++;
    },

    openNews(data) {
      console.log('data----->>', data);
      this.openRate++;
    },
  },
  provide() {
    return {
      title: 'All news1',
      news: this.news,
    };
  },
};
</script>

<style></style>
