import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Galeria from '../views/GaleriaView.vue'
import Pedido from '../views/PedidoView.vue'
import Revisar from '../views/RevisarView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: Galeria
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: Pedido
  },
  {
    path: '/revisar',
    name: 'revisar',
    component: Revisar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
