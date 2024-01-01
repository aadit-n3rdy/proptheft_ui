import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import StatewiseLineView from '../views/StatewiseLineView.vue'
import CategorywiseLineView from '../views/CategorywiseLineView.vue'
import StatewiseMapView from '../views/StatewiseMapView.vue'
import UserListView from '../views/UserListView.vue'
import UserEditView from '../views/UserEditView.vue'
import DataView from '../views/DataView.vue'
import UploadView from '../views/UploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/view',
      name: 'view',
      component: DataView
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: UserListView
    },
    {
      path: '/useredit',
      name: 'useredit',
      component: UserEditView
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
      path: '/upload',
      name: 'upload',
      component: UploadView
    },
    {
      path: '/statewise-map',
      name: 'statewise-map',
      component: StatewiseMapView
    }
  ]
})

export default router
