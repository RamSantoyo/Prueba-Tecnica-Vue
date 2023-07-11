import { createRouter, createWebHistory } from 'vue-router'
import Clientes from '../views/Clientes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Clientes
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import('../views/Agregar.vue')
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import('../views/Editar.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: Clientes
    }

  ]
})

export default router
