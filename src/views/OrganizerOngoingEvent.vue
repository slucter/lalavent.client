<template>
  <div class="container container-fluid my-5">
    <OrganizerCard
    :organizerImage="user.image"
    :organizerName="user.name"
    :organizerEvents="organizerEvents.length"
    :organizerDesc="user.description"/>
    <h1 class="my-5 d-flex justify-content-center align-items-center evn-title text-white">Ongoing Event</h1>
    <OngoingEventTable/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import OrganizerCard from '@/components/OrganizerCard'
import OngoingEventTable from '@/components/OngoingEventTable'

export default {
  name: 'OrganizerOngoingEvent',
  components: {
    OrganizerCard,
    OngoingEventTable
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
