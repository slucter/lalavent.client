import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    events: [],
    organizerEvents: [],
    ongoingEvent: []
  },
  mutations: {
    events (state, data) {
      state.events = data
      // console.log(state.events)
    },
    organizerEvents (state, data) {
      state.organizerEvents = data
      // console.log(state.events)
    },
    organizerOngoingEvent (state, data) {
      const d = new Date()
      const date = ('0' + d.getDate()).slice(-2)
      const month = ('0' + (d.getMonth() + 1)).slice(-2)
      const year = d.getFullYear()
      const dateStr = year + '-' + month + '-' + date
      // console.log(dateStr)

      const events = data
      const ongoingEvent = events.filter(event => event.date === dateStr)
      state.ongoingEvent = ongoingEvent
      // console.log(events[0].date)
      console.log(state.ongoingEvent[0].title)
    }
  },
  actions: {
    getAllEvents (context) {
      console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event')
        .then(res => {
          // console.log(res)
          context.commit('events', res.data.events.rows)
        })
    },
    getEventsByOrganizer (context, organizerId) {
      console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event/user/' + organizerId)
        .then(res => {
          // console.log(res)
          context.commit('organizerEvents', res.data.event.rows)
        })
    },
    getOrganizerOngoingEvent (context, organizerId) {
      console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event/user/' + organizerId)
        .then(res => {
          console.log(res)
          context.commit('organizerOngoingEvent', res.data.event.rows)
        })
    }
  }
})
