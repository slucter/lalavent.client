import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import event from './event'
import organizer from './organizer'
import user from './user'
// import axios from 'axios'
// import profil from './profil/'
import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin,
    organizer,
    event,
    user,
    general
    // profil
  }
})
