import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    organizer: {},
    events: []
  },
  mutations: {
    organizer (state, data) {
      state.organizer = data
      console.log(data.user)
    },
    events (state, data) {
      state.events = data
    }
  },
  actions: {
    getOrganizer ({ commit }, organizerId = 1) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + organizerId)
        .then(res => {
          console.log(res.data.user)
          commit('organizer', res.data.user)
        })
    },
    getEvents (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event')
        .then(res => {
          context.commit('events', res.data.events.rows)
        })
    }
  }
})
