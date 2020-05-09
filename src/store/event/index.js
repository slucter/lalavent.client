import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    events: [],
    organizerEvents: []
  },
  mutations: {
    events (state, data) {
      state.events = data
    },
    organizerEvents (state, data) {
      state.organizerEvents = data
      console.log(state.organizerEvents)
    }
  },
  actions: {
    getAllEvents (context) {
      // console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event')
        .then(res => {
          // console.log(res)
          context.commit('events', res.data.events.rows)
        })
    },
    getOrganizerEvents (context, id) {
      console.log(id)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'event/user/' + id)
        .then(res => {
          // console.log(res)
          context.commit('organizerEvents', res.data)
        })
    }
  }
})
