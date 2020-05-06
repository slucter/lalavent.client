import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RegisterOrganizer from '../views/Register-Owner.vue'
import OrganizerEventList from '../views/OrganizerEventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/register-organizer',
    name: 'RegisterOrganizer',
    component: RegisterOrganizer
  },
  {
    path: '/:organizerId/event-list',
    name: 'OrganizerEventList',
    component: OrganizerEventList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
