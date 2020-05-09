<template>
    <div class="event-list mt-3">
        <NavCategory />
        <div class="card-lists d-flex flex-wrap justify-content-center">
          <CardEvent
          v-for="data in eventStatus"
          :key="data.id"
          :eventImage="data.image"
          :eventTitle="data.title"
          :eventCategory="data.category.name"
          :eventDate="data.date"
          :eventStart="data.time_start"
          :eventEnd="data.time_end"
          :eventLocation="data.location"
          :eventOrganizer="'Arkademy'"
          :eventStatus="data.status === 1 ? 'Status online' : 'offline'"
          />
        </div>

        <div class="row d-flex justify-content-center mt-3 evn-secondary text-light px-3 py-3">
          <div class="col-md-7 d-flex justify-content-center">
            <h3 class="evn-title lead text-warning">Lihat lebih banyak ></h3>
          </div>
        </div>
        <footers />
    </div>
</template>

<script>
import axios from 'axios'
import NavCategory from '../components/_module/NavCategory.vue'
import CardEvent from '../components/EventList/CardEvent.vue'
import footers from '@/components/_module/Footer'

export default {
  name: 'EventList',
  data () {
    return {
      local: {
        id: null
      },
      eventsKuy: []
    }
  },
  components: {
    NavCategory,
    CardEvent,
    footers
  },
  computed: {
    eventStatus () {
      return this.eventsKuy.filter((e) => {
        return e.status === 1
      })
    }
  },
  methods: {
    getAllEvent () {
      axios.get('http://192.168.1.97:5000/api/lalavent/event')
        .then((result) => {
          this.eventsKuy = result.data.events.rows
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getAllEvent()
    console.log(this.eventsKuy)
  }
}
</script>

<style scoped>

</style>
