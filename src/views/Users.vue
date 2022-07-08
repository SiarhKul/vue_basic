<template>
  <div class='card'>
    <h1>Пользователи</h1>
    <p style='color: red' v-if='error'>{{ error }}</p>

    <Suspense v-else>
      <template #default>
        <UserList></UserList>
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script>
import UserList from '@/components/UserList';
import { defineComponent, onErrorCaptured, ref } from 'vue';

export default defineComponent({
  setup() {
    const error = ref(null);

    onErrorCaptured(e => {
      error.value = e;
      return true;
    });

    return {
      error,
    };
  },
  components: {
    UserList,
  },
});

</script>
