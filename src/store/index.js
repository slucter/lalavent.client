import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import event from './event/'
import organizer from './organizer/'
import Axios from 'axios'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myProfil: []
  },
  mutations: {
    getProfil (state, data) {
      state.myProfil = data
    }
  },
  actions: {
    profilUser (context) {
      Axios.get('http://192.168.1.97:5000/api/lalavent/user/1')
        .then((res) => {
          context.commit('getProfil', res.data.user)
        })
    }
  },
  modules: {
    admin,
    organizer,
    event,
    user
  }
})
