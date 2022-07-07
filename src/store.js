import { createStore } from 'vuex';


export default createStore({
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    add(state, payload) {
      state.counter += payload;
    },
  },
  getters: {
    counter(state) {
      if (state.counter > 10) {
        return 0;

      }
      return state.counter;
    },
    doubleCounter(_, getters) {
      return getters.counter * 2;
    },
  },
});
