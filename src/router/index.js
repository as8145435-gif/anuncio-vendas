import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FinalizarCompraView from '@/views/FinalizarCompraView.vue'
import PagamentoCompraView from '@/views/PagamentoCompraView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: FinalizarCompraView
  },
  {
    path: '/pagamento',
    name: 'pagamento',
    component: PagamentoCompraView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
