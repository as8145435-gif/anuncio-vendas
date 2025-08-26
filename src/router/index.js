import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FinalizarCompraView from '@/views/FinalizarCompraView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pagamento',
    name: 'pagamento',
    component: FinalizarCompraView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
