import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    search: null
  },
  mutations: {
    searchInput (state, data) {
      state.search = data
      // console.log(state.search)
    }
  },
  actions: {
    searchInput (context, data) {
      context.commit('searchInput', data)
    }
  }
})
