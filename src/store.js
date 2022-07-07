import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      title: 'This is VueX',
    };
  },

  getters: {
    appTitle(state) {
      return state.title.trim();
    },
  },
});
