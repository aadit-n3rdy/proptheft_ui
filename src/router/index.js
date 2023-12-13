import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import StatewiseLineView from '../views/StatewiseLineView.vue'
import CategorywiseLineView from '../views/CategorywiseLineView.vue'
import StatewiseMapView from '../views/StatewiseMapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/statewise-line',
      name: 'statewise-line',
      component: StatewiseLineView
    },
    {
      path: '/categorywise-line',
      name: 'categorywise-line',
      component: CategorywiseLineView
    },
    {
      path: '/statewise-map',
      name: 'statewise-map',
      component: StatewiseMapView
    }
  ]
})

export default router
