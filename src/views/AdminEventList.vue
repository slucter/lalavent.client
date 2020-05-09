<template>
  <section class="admin-event-list mt-4">
    <nav class="d-flex justify-content-center mb-2">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-1 evn-secondary pl-4">
          <router-link to="/admin/admin-organizer-list">
            <input type="radio" name="options" id="option1" checked> Daftar Penyelenggara
          </router-link>
        </label>
        <label class="btn btn-2 btn-secondary active pr-4">
          <router-link to="/admin/admin-event-list">
            <input type="radio" name="options" id="option2"> Daftar Acara
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
      th4="Tindakan"
      title="Daftar Acara"
    >
    <tbody>
      <tr v-for="data in events" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.title }}</td>
        <td>{{ data.category }}</td>
        <td>{{ data.location }}</td>
        <td class="d-flex">
          <div class="btn btn-sm btn-outline-light approved mr-2" data-toggle="modal" data-target="#event-agree">
            <i class="fas fa-user-check mr-2"></i>Setujui
          </div>
          <div class="btn btn-sm btn-outline-light delete" data-toggle="modal" data-target="#event-delete">
            <i class="fas fa-trash mr-2"></i>Hapus
          </div>
        </td>
      </tr>
    </tbody>
    </tables>
    <footers />
    <modal title="Daftar Acara" button="Setuju" id="event-agree">
      <p>Yakin ingin menyetujui acara ini?</p>
    </modal>
    <modal title="Hapus Acara" button="Hapus" id="event-delete">
      <p>Yakin ingin menghapus acara ini?</p>
    </modal>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import tables from '@/components/Tabel.vue'
import footers from '@/components/_module/Footer.vue'
import modal from '@/components/Modal.vue'

export default {
  name: 'AdminEventList',
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
  .btn-1, .btn-2{
    border-radius: 20px;
  }
</style>
