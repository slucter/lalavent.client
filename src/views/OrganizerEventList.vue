<template>
  <div class="container container-fluid my-5">
    <OrganizerCard
    :organizerImage="user.image"
    :organizerName="user.name"
    :organizerEvents="organizerLimitEvents"
    :organizerDesc="user.description"/>
    <div class="px-3 mt-5 d-flex flex-row justify-content-between align-items-center">
      <h3 class="mb-0 evn-title text-white">Semua Event</h3>
      <div class="d-flex flex-row align-items-center">
        <Button>
          <router-link class="link-anchor" to="/:organizerId/add-event">Buat Event</router-link>
        </Button>
        <Button v-if="ongoingEvent.length !== 0" class="ml-3">
          <router-link class="link-anchor" to="/:organizerId/ongoing-event">Ongoing Event</router-link>
        </Button>
      </div>
    </div>
    <div v-if="organizerEvents.length === 0" class="my-5 d-flex flex-column flex-md-row justify-content-center align-items-center text-white">
      <i class="far fa-frown fa-6x"></i>
      <div class="ml-md-5 d-flex flex-column">
        <h1 class="display-2 evn-title">Oops...</h1>
        <h4 class="evn-desc">Kamu belum buat event sama sekali nih</h4>
      </div>
    </div>
    <SearchSort v-if="organizerEvents.length !== 0" class="mt-5 px-5"/>
    <div class="mt-3 d-flex justify-content-center flex-wrap">
      <CardEvent
      v-for="data in organizerEvents" :key="data.id"
      :linkDetail="'/event/detail/' + data.id"
      :eventImage="data.image"
      :eventTitle="data.title"
      :eventCategory="data.category.name"
      :eventStatus="data.status === 1 ? 'Disetujui' : data.status === 2 ? 'Selesai' : data.status === 3 ? 'Tidak Disetujui' : 'Menunggu'"
      :eventDate="data.date"
      :eventStart="data.time_start"
      :eventEnd="data.time_end === '' ? timeEnd : data.time_end"
      :eventLocation="data.location"
      class="evn-shadow"/>
    </div>
    <Pagination
    v-if="organizerEvents.length !== 0"
    @prev="prevPage"
    @next="nextPage"
    class="mt-5"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import OrganizerCard from '@/components/OrganizerCard'
import Button from '@/components/Button'
import SearchSort from '@/components/SearchSort'
import CardEvent from '@/components/EventList/CardEvent'
import Pagination from '@/components/Pagination'

export default {
  name: 'OrganizerEventlist',
  data () {
    return {
      local: {
        id: null
      },
      timeEnd: 'Selesai',
      eventStatus: ['Waiting', 'Approved', 'Finished', 'Not Approved'],
      page: 1,
      totalPage: 0
    }
  },
  components: {
    OrganizerCard,
    Button,
    SearchSort,
    CardEvent,
    Pagination
  },
  created () {
    const parsed = JSON.parse(localStorage.getItem('items'))
    if (parsed) {
      this.local = parsed
    }
  },
  methods: {
    ...mapActions('user', ['getUserById', 'getLocalStorage']),
    ...mapActions('event', ['getEventsByOrganizer', 'getOrganizerOngoingEvent', 'getLimitEventsByOrganizer', 'getAllEventsByOrganizer']),
    nextPage () {
      this.total()
      if (this.page < this.totalPage && this.page !== this.totalPage) {
        this.page = this.page + 1
      } else {
        this.page = this.totalPage
      }
      this.getLimitEventsByOrganizer({ organizerId: this.local.id, page: this.page })
      // console.log(this.page)
      console.log(this.local.id)
    },
    prevPage () {
      this.total()
      if (this.page > 0 && this.page !== 1) {
        this.page -= 1
      } else {
        this.page = 1
      }
      this.getLimitEventsByOrganizer({ organizerId: this.local.id, page: this.page })
      // console.log(this.page)
    },
    total () {
      // console.log(this.organizerLimitEvents)
      this.totalPage = Math.ceil(this.organizerLimitEvents / 8)
      // console.log(this.totalPage)
    }
  },
  mounted () {
    this.getLocalStorage(this.local)
    this.getUserById(this.local.id)
    this.getEventsByOrganizer(this.local.id)
    this.getOrganizerOngoingEvent(this.local.id)
    // this.getAllEventsByOrganizer(this.local.id)
    this.getLimitEventsByOrganizer({ organizerId: this.local.id, page: this.page })
    // this.getLimitEventsByOrganizer(this.local.id)
  },
  computed: {
    ...mapState('event', ['organizerEvents', 'organizerLimitEvents', 'ongoingEvent']),
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000000;
}
</style>
