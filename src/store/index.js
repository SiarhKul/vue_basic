import { createStore, createLogger } from 'vuex';
import counterModule from '@/store/modules/counter';
import mutation from '@/store/mutation';
import actions from '@/store/actions';

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule,
  },
  state() {
    return {
      appTitle: 'Vuex Working',
    };
  },
  mutations: mutation,
  actions: actions,
  getters: {
    uppercaseTitle(state) {
      return state.appTitle.toUpperCase();
    },
  },
});
