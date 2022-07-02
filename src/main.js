import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import translatePlugin from './translatePlugin';

const app = createApp(App);

const ru = {
  app: {
    title: 'Как работает плагины в Vue',
    changeBtn:'Изменить язык'

  },
};

const en = {
  app: {
    title: 'How do plugins work в Vue',
    changeBtn:"Change languages"
  },
};


app.use(translatePlugin, {ru,en});
app.mount('#app');
