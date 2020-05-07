import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import event from './event/'
import organizer from './organizer/'

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
    event,
    organizer
  }
})
