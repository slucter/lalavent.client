import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    myProfil: [],
    myHistory: []
  },
  mutations: {
    getProfil (state, data) {
      state.myProfil = data
    },
    getEvent (state, data) {
      state.myHistory = data
    }
  },
  actions: {
    profilUser ({ commit }, id = 1) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + id)
        .then(res => {
          commit('getProfil', res.data.user)
        })
    },
    editProfil (context, id = 1, data) {
      axios
        .put(process.env.VUE_APP_BASE_URL + 'user/' + id, data, {
          header: { 'baca-bismillah': this.token }
        })
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
    historyEvent (context) {
      axios
        .get('http://192.168.1.97:5000/api/lalavent/event/user/2')
        .then(res => {
          context.commit('getEvent', res.data.event.rows)
        })
    }
  }
})
