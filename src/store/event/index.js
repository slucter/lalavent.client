import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    events: [],
    organizerEvents: [],
    totalEvents: []
  },
  mutations: {
    events (state, data) {
      state.events = data
      // console.log(state.events)
    },
    organizerEvents (state, data) {
      state.organizerEvents = data
      console.log(state.organizerEvents)
    },
    search (state, data) {
      state.events = data
      // console.log(data)
    },
    totalEvent (state, data) {
      state.totalEvents = data
      console.log(state.totalEvents)
    }
  },
  actions: {
    getAllEvents (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event')
        .then(res => {
          // console.log(res)
          context.commit('events', res.data.events.rows)
        })
    },
    getAllPages (context, page) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event?page=' + page)
        .then(res => {
          // console.log(res)
          context.commit('events', res.data.events.rows)
        })
    },
    eventNewest (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event?time=DESC')
        .then(res => {
          // console.log(res)
          context.commit('events', res.data.events.rows)
        })
    },
    eventOldest (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event?time=ASC')
        .then(res => {
          // console.log(res)
          context.commit('events', res.data.events.rows)
        })
    },
    totalEvent (context) {
      // console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event')
        .then(res => {
          // console.log(res)
          context.commit('totalEvent', res.data.events.count)
        })
    },
    searchEvent (context, data) {
      // console.log(data)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event?search=' + data)
        .then(res => {
          // console.log(res)
          context.commit('search', res.data.events.rows)
        })
    },
    getEventsByOrganizer (context, organizerId) {
      // console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event/user/' + organizerId)
        .then(res => {
          // console.log(res)
          context.commit('organizerEvents', res.data)
        })
    }
  }
})
