import { createRouter, createWebHistory } from 'vue-router'
import order from '../components/order.vue'
const routes = [
  {
    path: '/order',
    component: order
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
