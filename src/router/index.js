import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from 'views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
  // {
  //   path: '/login',
  //   name: 'LoginPage',
  //   component: () =>
  //     import(/* webpackChunkName: "Home" */ 'views/LoginPage.vue')
  // }
  // {
  //   path: '/stuSelect',
  //   name: 'StuSelectionPage',
  //   component: () =>
  //     import(/* webpackChunkName: "Home" */ 'views/StuSelectionPage.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
