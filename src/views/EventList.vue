<template>
    <div>
        <NavCategory />
        <div class="card-lists d-flex flex-wrap justify-content-center">
          <CardEvent v-for="data in datas" :key="data.id"/>
        </div>
    </div>
</template>

<script>
import NavCategory from '../components/EventList/NavCategory.vue'
import CardEvent from '../components/EventList/CardEvent.vue'

export default {
  name: 'EventList',
  data () {
    return {
      datas: 10
    }
  },
  components: {
    NavCategory,
    CardEvent
  }
}
</script>

<style scoped>

</style>
