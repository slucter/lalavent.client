<template>
  <div class="container">
    <OrganizerCard/>
    <div class="px-3 mt-5 d-flex flex-row justify-content-between">
      <h3 class="evn-title text-white">Semua Event</h3>
      <Button>Buat Event</Button>
    </div>
  </div>
</template>

<script>
import OrganizerCard from '@/components/OrganizerCard'
import Button from '@/components/Button'

export default {
  name: 'OrganizerEventlist',
  components: {
    OrganizerCard,
    Button
  }
}
</script>

<style lang="scss" scoped>

</style>
