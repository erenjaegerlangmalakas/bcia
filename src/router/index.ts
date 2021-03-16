import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
     path: '/signup',
     name: 'SignUp',
     component: SignUp
   },
   {
     path: '/admin-dashboard',
     name: 'AdminDashboard',
     component: AdminDashboard
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
