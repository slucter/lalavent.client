import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    user: []
  },
  mutations: {
    user (state, data) {
      state.user = data
      console.log(state.user)
    }
  },
  actions: {
    getUserById (context, id = 1) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + id)
        .then(res => {
          // console.log(res)
          context.commit('user', res.data.user)
        })
    }
  }
})
