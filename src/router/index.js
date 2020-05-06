import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import OrganizerEventList from '../views/OrganizerEventList.vue'
import AddEvent from '../views/AddEvent.vue'

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
    path: '/:organizerId/event-list',
    name: 'OrganizerEventList',
    component: OrganizerEventList
  },
  {
    path: '/:organizerId/add-event',
    name: 'AddEvent',
    component: AddEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
