import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    myProfil: []
  },
  mutations: {
    getProfil (state, data) {
      state.myProfil = data
      console.log(state.myProfil)
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
    editProfil (id = 1, data) {
      axios
        .put(process.env.VUE_APP_BASE_URL + 'user/' + id, data, {
          headers: { 'baca-bismillah': this.token }
        })
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
