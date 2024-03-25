import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import routers from "@/views/CesiumDemo/config/config"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: routers
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
