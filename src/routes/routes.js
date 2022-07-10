import Tasks from '@/views/Tasks';
import New from '@/views/New'
import { createRouter,createWebHistory } from 'vue-router';

const routes=[
  {path:"/", component:Tasks},
  {path:"/new", component: New}
]


export const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass:'active',
  linkActiveClass:'active',
  routes,
})

