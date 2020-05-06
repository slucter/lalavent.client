<template>
  <section class="admin-org-list mt-4">
    <nav class="d-flex justify-content-center mb-2">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn evn-secondary active">
          <router-link to="/admin/admin-organizer-list">
            <input type="radio" name="options" id="option1" checked> Organizer List
          </router-link>
        </label>
        <label class="btn btn-secondary">
          <router-link to="/admin/admin-event-list">
            <input type="radio" name="options" id="option2"> Event List
          </router-link>
        </label>
      </div>
    </nav>
    <!-- Table -->
    <tables
      hash="#"
      th1="Nama"
      th2="Email"
      th3="Alamat"
      th4="Action"
      title="Organizer List"
    >
    <tbody>
      <tr v-for="data in organizers" :key="data.id">
        <td>1</td>
        <td>{{ data.name }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.address }}</td>
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
  name: 'AdminOrganizerList',
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
    ...mapActions('organizer', ['getAllOrganizers'])
  },
  mounted () {
    this.getAllOrganizers()
  },
  computed: {
    ...mapState('organizer', ['organizers'])
  }
}
</script>

<style lang="scss" scoped>

</style>
