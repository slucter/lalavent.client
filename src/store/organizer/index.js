import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    organizer: {},
    events: [],
    category: []
  },
  mutations: {
    organizer (state, data) {
      state.organizer = data
    },
    events (state, data) {
      state.events = data
    },
    category (state, data) {
      state.category = data
      // console.log(data.category)
    }
  },
  actions: {
    getOrganizer ({ commit }, organizerId = 1) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + organizerId)
        .then(res => {
          // console.log(res.data.user)
          commit('organizer', res.data.user)
        })
    },
    getEvents (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event')
        .then(res => {
          context.commit('events', res.data.events.rows)
        })
    },
    getCategory (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'category')
        .then(res => {
          console.log(res.data.Categories.rows[0].name)
          context.commit('category', res.data.Categories.rows)
        })
    },
    addEvent (context) {
      axios
        .post(process.env.VUE_APP_BASE_URL + 'event')
        .then(res => {
          console.log(res.data.Categories.rows[0].name)
          context.commit('category', res.data.Categories.rows)
        })
    }
  }
})
