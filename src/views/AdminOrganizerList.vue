<template>
  <section class="admin-org-list mt-4">
    <nav class="d-flex justify-content-center mb-2">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn evn-secondary active">
          <router-link to="/admin/admin-organizer-list">
            <input type="radio" name="options" id="option1" checked> Daftar Penyelenggara
          </router-link>
        </label>
        <label class="btn btn-secondary">
          <router-link to="/admin/admin-event-list">
            <input type="radio" name="options" id="option2"> Daftar Acara
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
      th4="Tindakan"
      title="Daftar Penyelenggara"
    >
    <tbody>
      <tr v-for="data in organizers" :key="data.id">
        <td>1</td>
        <td>{{ data.name }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.address }}</td>
        <td class="d-flex">
          <div class="btn btn-sm btn-outline-light approved mr-2" data-toggle="modal" data-target="#organizer-agree">
            <i class="fas fa-user-check mr-2"></i>Setujui
          </div>
          <div class="btn btn-sm btn-outline-light delete" data-toggle="modal" data-target="#organizer-delete">
            <i class="fas fa-trash mr-2"></i>Hapus
          </div>
        </td>
      </tr>
    </tbody>
    </tables>
    <footers />
    <modal title="Daftar Penyelenggara" button="Setuju" id="organizer-agree">
      <p>Yakin ingin menyetujui penyelenggara ini?</p>
    </modal>
    <modal title="Hapus Penyelenggara" button="Hapus" id="organizer-delete">
      <p>Yakin ingin menghapus penyelenggara ini?</p>
    </modal>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import tables from '@/components/Tabel.vue'
import footers from '@/components/_module/Footer.vue'
import modal from '@/components/Modal.vue'

export default {
  name: 'AdminOrganizerList',
  components: {
    tables,
    footers,
    modal
  },
  data () {
    return {
      datas: 5
    }
  },
  methods: {
    ...mapActions('admin', ['getAllOrganizers'])
  },
  mounted () {
    this.getAllOrganizers()
  },
  computed: {
    ...mapState('admin', ['organizers'])
  }
}
</script>

<style lang="scss" scoped>

</style>
