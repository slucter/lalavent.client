import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    organizers: []
  },
  mutations: {
    organizers (state, data) {
      state.organizers = data
      console.log(state.organizers)
    }
  },
  actions: {
    getAllOrganizers (context) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/role/2')
        .then(res => {
          context.commit('organizers', res.data.user.rows)
        })
    },
    deleteOrganizer (context, { id, token }) {
      // console.log('delete')
      axios
        .delete(process.env.VUE_APP_BASE_URL + 'user/' + id, {
          headers: { 'baca-bismillah': token }
        })
        .then(res => {
          console.log(res)
        })
    },
    approveOrganizer (context, id) {
      // console.log(process.env.VUE_APP_BASE_URL + 'user/approve/' + id)
      axios
        .patch(process.env.VUE_APP_BASE_URL + 'user/approve/' + id)
        .then(res => {
          console.log(res.data.message)
        })
    },
    deleteEvent (context, { id, token }) {
      // console.log('delete event', +id)
      axios
        .delete(process.env.VUE_APP_BASE_URL + 'event/' + id, {
          headers: { 'baca-bismillah': token }
        })
        .then(res => {
          console.log(res)
        })
    },
    approveEvent (context, { id, token }) {
      console.log(id, token)
      axios
        .patch(process.env.VUE_APP_BASE_URL + 'event/approve/' + id, {
          status: 1
        },
        {
          headers: { 'baca-bismillah': token }
        })
        .then(res => {
          console.log(res.data.message)
        })
    }
  }
})
