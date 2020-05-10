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
    <tbody v-for="event in organizerEvents" :key="event.id">
      <tr v-if="event.date < new Date().toISOString().slice(0, 10).toString()">
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
  data () {
    return {
      // tanggal: new Date().toISOString().slice(0, 10).toString()
    }
  },
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
