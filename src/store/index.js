import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import event from './event/'
import organizer from './organizer/'
import user from './user'
import profil from './profil/index'
import ticket from './ticket'
// import axios from 'axios'
// import profil from './profil/'

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
    profil,
    ticket,
    user
    // profil
  }
})
