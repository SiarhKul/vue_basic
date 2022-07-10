<template>
  <h1 class='text-white center' v-if='amountLength===0'>Задач пока нет</h1>

  <div v-else v-for='todo in todos' :key='todo.id'>
    <h3 class='text-white'>Всего активных задач: {{ amountLength }}</h3>
    <div class='card'>
      <h2 class='card-title'>
        Название задачи
        {{ todo.titleTask }}
        <AppStatus :type='todo.status' />
      </h2>
      <p>
        <strong>
          <small>
            {{ todo.dateTask }}
          </small>
        </strong>
      </p>
      <button class='btn'>
        <router-link :to="`task/${todo.id}`">Посмотреть</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus';
import { useStore } from 'vuex';


export default {
  setup() {
    const mainStore = useStore();
    return {
      amountLength: mainStore.getters.getAmountTasks,
      todos: mainStore.state.todos,
    };
  },

  components: { AppStatus },
};
</script>
