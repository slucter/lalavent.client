import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/EventList.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import OrganizerEventList from '../views/OrganizerEventList.vue'
import EventStatistic from '../views/EventStatistic.vue'
import AddEvent from '../views/AddEvent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
    path: '/:organizerId/event-statistic',
    name: 'EventStatistic',
    component: EventStatistic
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
