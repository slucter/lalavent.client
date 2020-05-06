<template>
  <section class="admin-event-list mt-4">
    <nav class="d-flex justify-content-center mb-2">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary">
          <router-link to="/admin/admin-organizer-list">
            <input type="radio" name="options" id="option1" checked> Organizer List
          </router-link>
        </label>
        <label class="btn evn-secondary active">
          <router-link to="/admin/admin-event-list">
            <input type="radio" name="options" id="option2"> Event List
          </router-link>
        </label>
      </div>
    </nav>
    <!-- Table -->
    <tables
      hash="#"
      th1="Nama Event"
      th2="Tanggal"
      th3="Tempat"
      th4="Action"
      title="Event List"
    >
    <tbody>
      <tr v-for="data in events" :key="data.id">
        <td>1</td>
        <td>{{ data.title }}</td>
        <td>{{ data.date }}</td>
        <td>{{ data.location }}</td>
        <td class="d-flex">
          <div class="btn btn-sm btn-outline-light approved mr-2">
            <i class="fas fa-user-check mr-2"></i>Approve
          </div>
          <div class="btn btn-sm btn-outline-light delete">
            <i class="fas fa-trash mr-2"></i>Delete
          </div>
        </td>
      </tr>
    </tbody>
    </tables>
    <footers />
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import tables from '@/components/Tabel.vue'
import footers from '@/components/_module/Footer.vue'

export default {
  name: 'AdminEventList',
  components: {
    tables,
    footers
  },
  data () {
    return {
      datas: 5
    }
  },
  methods: {
    ...mapActions('event', ['getAllEvents'])
  },
  mounted () {
    this.getAllEvents()
  },
  computed: {
    ...mapState('event', ['events'])
  }
}
</script>

<style lang="scss" scoped>

</style>
