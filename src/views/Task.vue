<template>
  <div class='card'>
    <h2>Название задачи</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="task.status" />
    </p>
    <p><strong>Дэдлайн</strong>: {{task.dateTask}}</p>
    <p><strong>Описание</strong>: {{task.descriptionTask}}</p>
    <div>
      <button class='btn'>Взять в работу</button>
      <button class='btn primary'>Завершить</button>
      <button class='btn danger'>Отменить</button>
    </div>
  </div>
  <h3 class='text-white center'>
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  components: { AppStatus },

  setup() {
    const route = useRoute();
    const mainStore = useStore();
    const { id } = route.params;
    const task = mainStore.state.todos.find(todo => todo.id == id);

    return {
      task,
    };
  },

};
</script>


