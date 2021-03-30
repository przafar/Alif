import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import All from '../views/All.vue'
import Member from '../views/Member.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/all',
    name: 'All',
    component: All
  },
  {
    path: '/Member/:id',
    name: 'Member',
    component: Member,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
