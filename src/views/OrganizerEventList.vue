<template>
  <div class="container container-fluid my-5">
    <OrganizerCard/>
    <div class="px-3 mt-5 d-flex flex-row justify-content-between align-items-center">
      <h3 class="mb-0 evn-title text-white">Semua Event</h3>
      <Button>
        <router-link class="link-anchor" to="/:organizerId/add-event">Buat Event</router-link>
      </Button>
    </div>
    <SearchSort class="mt-5 px-5"/>
    <div class="mt-3 d-flex flex-wrap justify-content-center">
      <CardEvent class="evn-shadow" v-for="item in 8" :key="item"/>
    </div>
  </div>
</template>

<script>
import OrganizerCard from '@/components/OrganizerCard'
import Button from '@/components/Button'
import SearchSort from '@/components/SearchSort'
import CardEvent from '@/components/EventList/CardEvent'

export default {
  name: 'OrganizerEventlist',
  components: {
    OrganizerCard,
    Button,
    SearchSort,
    CardEvent
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000000;
}
</style>
