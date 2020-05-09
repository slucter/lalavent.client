<template>
    <div class="event-list mt-3">
        <NavCategory />
        <div class="card-lists d-flex flex-wrap justify-content-center mb-5">
          <CardEvent v-for="data in datas" :key="data.id"/>
        </div>
        <footers/>
    </div>
</template>

<script>
import NavCategory from '../components/EventList/NavCategory.vue'
import CardEvent from '../components/EventList/CardEvent.vue'
import footers from '@/components/_module/Footer'

export default {
  name: 'EventList',
  data () {
    return {
      datas: 10
    }
  },
  components: {
    NavCategory,
    CardEvent,
    footers
  }
}
</script>

<style scoped>

</style>
