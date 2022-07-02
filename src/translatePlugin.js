export default {
  install(app, options) {
    console.log('1-----------', app);
    console.log('2-----------', options);

    let current = 'ru';

    const changeLanguages = (name)=>{
      console.log(name);
      current=name;
    }

    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };

    app.config.globalProperties.$i18n = (key) => {
      return key.split('.').reduce((words, k) => {
        return words[k] || '===unknown===';
      }, options[current]);
    };

    app.provide('changeI18n',changeLanguages)
  },
};
