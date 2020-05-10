<template>
<div class="container">
  <div class="d-flex justify-content-between row mt-5 mb-5">
    <div class="card evn-shadow evn-rounded evn-secondary text-white" style="width: 19rem;">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h3 class="card-title text-center evn-title">Event Aktif</h3>
          </div>
          <!-- <div class="col">
            <h5 class="card-title evn-title d-flex flex-row-reverse"><router-link to="/event-active">Detail</router-link></h5>
          </div> -->
        </div>
        <hr class="border-light">
        <h1 class="card-title text-center"> {{this.organizerEvents.length}} <span class="star">Event</span></h1>
      </div>
    </div>
    <div class="card evn-shadow evn-rounded evn-secondary text-white" style="width: 19rem;">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h3 class="card-title text-center evn-title">Event Selesai</h3>
          </div>
          <!-- <div class="col">
            <h5 class="card-title evn-title d-flex flex-row-reverse"><router-link to="/event-past">Detail</router-link></h5>
          </div> -->
        </div>
        <hr class="border-light">
        <h1 class="card-title text-center">0 <span class="star">Event</span></h1>
      </div>
    </div>
    <div class="card evn-shadow evn-rounded evn-secondary text-white" style="width: 19rem;">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h3 class="card-title text-center evn-title">Total Transaksi</h3>
          </div>
        </div>
        <hr class="border-light">
        <h1 class="card-title text-center">0</h1>
      </div>
    </div>
  </div>
  <History/>
  <Footer/>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import History from '../views/History.vue'
import Footer from '../components/_module/Footer.vue'

export default {
  name: 'Dashboard',
  components: {
    History,
    Footer
  },
  // computed: {
  //   ...mapState('event', ['events'])
  // },
  // methods: {
  //   ...mapActions('event', ['getAllEvents'])
  // },
  // mounted () {
  //   this.getAllEvents()
  // }
  methods: {
    ...mapActions('event', ['getEventsByOrganizer'])
  },
  mounted () {
    this.getEventsByOrganizer(this.local.id)
  },
  computed: {
    ...mapState('event', ['organizerEvents']),
    ...mapState('user', ['local'])
  }
}
</script>

<style lang="scss" scoped>
.star{
  font-size: 17px;
}
</style>
