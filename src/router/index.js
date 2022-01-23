import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tv',
    name: 'TV',
    component: () => import(/* webpackChunkName: "about" */ '../views/tv')
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import(/* webpackChunkName: "about" */ '../views/movies')
  },
  {
    path: '/mylist',
    name: 'MyList',
    component: () => import(/* webpackChunkName: "about" */ '../views/mylist')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "about" */ '../views/signin')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/signup')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router