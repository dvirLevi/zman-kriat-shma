import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Shema',
    name: 'Shema',
    component: () => import( '../views/Shema.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
