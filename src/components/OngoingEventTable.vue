<template>
  <div class="card evn-rounded evn-secondary evn-shadow mt-3">
    <h2 class="mt-5 my-4 d-flex justify-content-center align-items-center evn-title text-white">{{ ongoingEvent[0].title }}</h2>
    <SearchSort class="px-5 mt-4"/>
    <div class="card-body">
      <div class="table-responsive mt-3">
        <table class="table text-white">
          <thead>
            <tr class="text-center evn-title">
              <th scope="col">#</th>
              <th scope="col">Pengunjung</th>
              <th scope="col">Email</th>
              <th scope="col">Ticket ID</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in eventTickets" :key="data.id" class="text-center evn-desc">
              <th scope="row">{{ data.id }}</th>
              <td>{{ data.user.name }}</td>
              <td>{{ data.user.email }}</td>
              <td><input type="text" v-model="ticketId" @keyup.enter="changeStatus" placeholder="Masukkan ID Ticket..." class="text-white ticket-id"></td>
              <td>
                <span v-if="data.status === true">Approved</span>
                <span v-if="data.status === false">Waiting</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import SearchSort from '@/components/SearchSort'
import Pagination from '@/components/Pagination'

export default {
  name: 'OngoingEventTable',
  data () {
    return {
      local: {
        id: null
      },
      status: 'Waiting',
      ticketId: []
    }
  },
  components: {
    SearchSort,
    Pagination
  },
  created () {
    const parsed = JSON.parse(localStorage.getItem('items'))
    if (parsed) {
      this.local = parsed
    }
  },
  methods: {
    changeStatus () {
      if (this.tickets[0].id === this.ticketId) {
        this.tickets[0].status = !this.tickets[0].status
      } else {
        console.log('wrong')
        console.log(this.ticketId)
        console.log(this.tickets[0].id)
      }
      console.log(this.tickets[0].status)
    },
    ...mapActions('user', ['getUserById', 'getLocalStorage']),
    ...mapActions('event', ['getOrganizerOngoingEvent']),
    ...mapActions('ticket', ['getTicketsByEvent'])
  },
  mounted () {
    this.getLocalStorage(this.local)
    this.getUserById(this.local.id)
    this.getOrganizerOngoingEvent(this.local.id)
    this.getTicketsByEvent()
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('event', ['ongoingEvent']),
    ...mapState('ticket', ['eventTickets'])
  }
}
</script>
<style lang="scss" scoped>
.ticket-id {
  background-color: transparent;
  border: none;
  width: auto;
  outline: none;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: darkgray;
  opacity: 1; /* Firefox */
}
</style>
