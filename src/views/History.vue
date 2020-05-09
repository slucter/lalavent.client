<template>
  <div class="evn-primary">
    <Table
      hash="#"
      th1="Nama Event"
      th2="Tanggal"
      th3="Category"
      th4="Location"
      title="History Event"
    >
    <tbody>
      <tr v-for="event in organizerEvents" :key="event.id">
        <td>{{event.id}}</td>
        <td>{{event.title}}</td>
        <td>{{event.date}}</td>
        <td>{{event.category.name}}</td>
        <td>{{event.location}}</td>
      </tr>
    </tbody>
    </Table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Table from '../components/Tabel'
export default {
  name: 'HistoryEvent',
  components: {
    Table
  },
  methods: {
    ...mapActions('event', ['getEventsByOrganizer'])
  },
  mounted () {
    this.getEventsByOrganizer()
  },
  computed: {
    ...mapState('event', ['organizerEvents'])
  }
}
</script>

<style>

</style>
