import { createStore } from 'vuex';

export const mainStore = createStore({
  state() {
    return {
      todos:[]
    };
  },
  getters: {
    getAmountTasks(state) {
      return state.todos.length;
    },
  },
  mutations: {
    setFormFields(state, payload) {
      state.todos.push(payload)

    },
  },
});
