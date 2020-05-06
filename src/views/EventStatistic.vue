<template>
  <div class="container my-5">
    <OrganizerCard/>
    <div class="px-3 mt-5 d-flex flex-row justify-content-between">
      <h3 class="evn-title text-white">Statistik Semua Event</h3>
    </div>
    <EventStatisticTable/>
  </div>
</template>

<script>
import OrganizerCard from '@/components/OrganizerCard'
import EventStatisticTable from '@/components/EventStatisticTable'

export default {
  name: 'EventStatistic',
  components: {
    OrganizerCard,
    EventStatisticTable
  }
}
</script>

<style lang="scss" scoped>

</style>
