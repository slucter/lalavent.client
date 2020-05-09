<template>
    <div>
        <NavCategory />
        <div class="card-lists d-flex flex-wrap justify-content-center">
          <CardEvent
          v-for="data in dataEvent"
          :key="data.id"
          cardThumb=""
          cardTitle=""
          cardCategory=""
          cardStatus=""
          cardSquad=""
          cardTime=""
          CardClock=""
          CardLocation=""/>
        </div>

        <div class="row d-flex justify-content-center mt-3 evn-secondary text-light px-3 py-3">
          <div class="col-md-7 d-flex justify-content-center">
            <h3 class="evn-title lead text-warning">Lihat lebih banyak ></h3>
          </div>
        </div>
        <Footer />
        <SmallFooter />
    </div>
</template>

<script>
import NavCategory from '../components/_module/NavCategory.vue'
import CardEvent from '../components/EventList/CardEvent.vue'
import Footer from '../components/_module/Footer.vue'
import SmallFooter from '../components/_module/Small-Footer.vue'

export default {
  name: 'EventList',
  data () {
    return {
      dataEvent: [
        {
          id: 0,
          cardThumb: null,
          cardTitle: null,
          cardCategory: null,
          cardStatus: null,
          cardSquad: null,
          cardTime: null,
          cardClock: null,
          cardLocation: null
        }
      ]
    }
  },
  components: {
    NavCategory,
    CardEvent,
    Footer,
    SmallFooter
  }
}
</script>

<style scoped>

</style>
