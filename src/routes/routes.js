import Tasks from '@/views/Tasks';
import New from '@/views/New'
import Task from '@/views/Task';
import { createRouter,createWebHistory } from 'vue-router';

const routes=[
  {path:"/", component:Tasks},
  {path:"/new", component: New},
  {path:"/task/:id?", component: Task}
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass:'active',
  linkActiveClass:'active',
})

