import Vue from 'vue'
import Vuex from 'vuex'
import organizer from './organizer'
import event from './event/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    organizer,
    event
  }
})
