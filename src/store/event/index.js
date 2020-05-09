import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    events: []
  },
  mutations: {
    events (state, data) {
      state.events = data
      console.log(state.events)
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
    }
  }
})
