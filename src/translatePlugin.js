export default {
  install(app, options) {

    let current = 'ru';

    const changeLanguages = (name) => {
      console.log(name);
      current = name;
    };

    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };

    app.config.globalProperties.$i18n = (key) => {
      const r = key.split('.').reduce((words, currentItem) => {
        return words[currentItem] || '===unknown===';
      }, options[current]);
      console.log(r);
      return r;
    };

    app.provide('changeI18n', changeLanguages);
  },
};
