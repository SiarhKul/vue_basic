import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import { router } from '@/routes/routes';
import { mainStore } from '@/store/mainStore';

const app =createApp(App)
  app
    .use(router)
    .use(mainStore)
  app.mount('#app');
