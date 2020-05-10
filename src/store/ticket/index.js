import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    eventTickets: []
  },
  mutations: {
    tickets (state, data) {
      const d = new Date()
      const date = ('0' + d.getDate()).slice(-2)
      const month = ('0' + (d.getMonth() + 1)).slice(-2)
      const year = d.getFullYear()
      const dateStr = year + '-' + month + '-' + date
      // console.log(dateStr)

      const tickets = data
      const eventTickets = tickets.filter(ticket => ticket.event.date === dateStr)
      state.eventTickets = eventTickets
      // console.log(tickets[0].date)
      // console.log(data[1].event.date)
      // console.log(state.eventTickets)
    }
  },
  actions: {
    getTicketsByEvent (context) {
      console.log(process.env.VUE_APP_BASE_URL)
      axios
        .get(process.env.VUE_APP_BASE_URL + 'ticket')
        .then(res => {
          // console.log(res)
          context.commit('tickets', res.data.Tickets.rows)
        })
    }
  }
})
