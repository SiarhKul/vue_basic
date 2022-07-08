import { useFetch } from '@/use/fetch';
import { Ref, ref } from 'vue';

type UsableUser = Promise<{ users: Ref<User[] | undefined> }>

interface User {
  id: string,
  name: string,
  email: string
}

export async function useUsers(): UsableUser {
  const loading = ref(false);

  const { response: users, request } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  if (!loading.value) {
    await request();
    loading.value = true;
  }
  return { users };

}
