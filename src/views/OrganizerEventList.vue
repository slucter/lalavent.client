<template>
  <div class="container container-fluid my-5">
    <OrganizerCard
    :organizerImage="user.image"
    :organizerName="user.name"/>
    <div class="px-3 mt-5 d-flex flex-row justify-content-between align-items-center">
      <h3 class="mb-0 evn-title text-white">Semua Event</h3>
      <Button>
        <router-link class="link-anchor" to="/:organizerId/add-event">Buat Event</router-link>
      </Button>
    </div>
    <SearchSort class="mt-5 px-5"/>
    <div class="mt-3 d-flex flex-wrap justify-content-center">
      <CardEvent
      v-for="data in events" :key="data.id"
      :eventImage="data.image"
      :eventTitle="data.title"
      :eventCategory="data.category.name"
      :eventDate="data.date"
      :eventStart="data.time_start"
      :eventEnd="data.time_end"
      :eventLocation="data.location"
      class="evn-shadow"/>
    </div>
    <Pagination class="mt-5"/>
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
    ...mapActions('organizer', ['getEvents'])
  },
  mounted () {
    this.getEvents()
    this.getLocalStorage(this.local)
    this.getUserById(this.local.id)
  },
  computed: {
    ...mapState('organizer', ['events']),
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000000;
}
</style>
