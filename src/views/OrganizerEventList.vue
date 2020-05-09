<template>
  <div class="container container-fluid my-5">
    <OrganizerCard
    :organizerImage="user.image"
    :organizerName="user.name"
    :organizerEvents="organizerEvents.length"
    :organizerDesc="user.description"/>
    <div class="px-3 mt-5 d-flex flex-row justify-content-between align-items-center">
      <h3 class="mb-0 evn-title text-white">Semua Event</h3>
      <div class="d-flex flex-row align-items-center">
        <Button>
          <router-link class="link-anchor" to="/:organizerId/add-event">Buat Event</router-link>
        </Button>
        <Button class="ml-3">
          <router-link class="link-anchor" to="/:organizerId/ongoing-event">Orgoing Event</router-link>
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
    <div class="mt-3 d-flex flex-wrap justify-content-center">
      <CardEvent
      v-for="data in organizerEvents" :key="data.id"
      :eventImage="data.image"
      :eventTitle="data.title"
      :eventCategory="data.category.name"
      :eventDate="data.date"
      :eventStart="data.time_start"
      :eventEnd="data.time_end"
      :eventLocation="data.location"
      class="evn-shadow"/>
    </div>
    <Pagination v-if="organizerEvents.length !== 0" class="mt-5"/>
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
      }
    }
  },
  props: [
    'organizerId'
  ],
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
    ...mapActions('event', ['getEventsByOrganizer'])
  },
  mounted () {
    this.getEventsByOrganizer(this.local.id)
    this.getLocalStorage(this.local)
    this.getUserById(this.local.id)
  },
  computed: {
    ...mapState('event', ['organizerEvents']),
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000000;
}
</style>
