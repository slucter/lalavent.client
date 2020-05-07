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
      console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/role/2')
        .then(res => {
          console.log(res)
          context.commit('organizers', res.data.user.rows)
        })
    }
  }
})
