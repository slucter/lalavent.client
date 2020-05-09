<template>
  <div class="container my-5">
    <OrganizerCard
    :organizerImage="user.image"
    :organizerName="user.name"/>
    <div class="px-3 mt-5 d-flex flex-row justify-content-between">
      <h3 class="evn-title text-white">Statistik Semua Event</h3>
    </div>
    <div v-if="organizerEvents.length === 0" class="my-5 d-flex flex-column flex-md-row justify-content-center align-items-center text-white">
      <i class="far fa-frown fa-6x"></i>
      <div class="ml-md-5 d-flex flex-column">
        <h1 class="display-2 evn-title">Oops...</h1>
        <h4 class="evn-desc">Kamu belum buat event sama sekali nih</h4>
      </div>
    </div>
    <EventStatisticTable v-if="organizerEvents.length !== 0"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import OrganizerCard from '@/components/OrganizerCard'
import EventStatisticTable from '@/components/EventStatisticTable'

export default {
  name: 'EventStatistic',
  data () {
    return {
      local: {
        id: null
      }
    }
  },
  components: {
    OrganizerCard,
    EventStatisticTable
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

</style>
