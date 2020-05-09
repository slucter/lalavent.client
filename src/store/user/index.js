import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    user: [],
    local: []
  },
  mutations: {
    user (state, data) {
      state.user = data
      console.log(state.user)
    },
    local (state, data) {
      state.local = data
      // console.log(state.local)
    }
  },
  actions: {
    getUserById (context, id) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + id)
        .then(res => {
          // console.log(res)
          context.commit('user', res.data.user)
        })
    },
    getLocalStorage (context, data) {
      context.commit('local', data)
    }
  }
})
