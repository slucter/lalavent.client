import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/EventList.vue'
import Dashboard from '../views/Dashboard.vue'
import EventActiveUser from '../views/EventActiveUser.vue'
import EventPastUser from '../views/EventPastUser.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RegisterOrganizer from '../views/Register-Owner.vue'
import OrganizerEventList from '../views/OrganizerEventList.vue'
import AdminEventList from '../views/AdminEventList.vue'
import AdminOrganizerList from '../views/AdminOrganizerList.vue'
import EventStatistic from '../views/EventStatistic.vue'
import AddEvent from '../views/AddEvent.vue'
import EventDetail from '../views/EventDetail.vue'
import Penyelenggara from '../views/Penyelenggara.vue'
import Logout from '../views/Logout.vue'
import Payment from '../views/Payment.vue'
import Profil from '../views/Profil.vue'
import DetailOrganizer from '../views/DetailOrganizer.vue'
import OrganizerOngoingEvent from '../views/OrganizerOngoingEvent.vue'
import HistoryEvent from '../views/History.vue'

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
    path: '/event/detail',
    name: 'EventDetail',
    component: EventDetail
  },
  {
    path: '/event/squad',
    name: 'Penyelenggara',
    component: Penyelenggara
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/event-active',
    name: 'EventActiveUser',
    component: EventActiveUser
  },
  {
    path: '/event-past',
    name: 'EventPastUser',
    component: EventPastUser
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
  },
  {
    path: '/admin/admin-event-list',
    name: 'AdminEventList',
    component: AdminEventList
  },
  {
    path: '/admin/admin-organizer-list',
    name: 'AdminOrganizerList',
    component: AdminOrganizerList
  },
  {
    path: '/detail-organizer/:id',
    name: 'DetailOrganizer',
    component: DetailOrganizer
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/profile',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/:organizerId/ongoing-event',
    name: 'OrganizerOngoingEvent',
    component: OrganizerOngoingEvent
  },
  {
    path: '/history',
    name: 'HistoryEvent',
    component: HistoryEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
