<template>
  <section class="admin-org-list">
    <!-- Table -->
    <tables class="my-3"
      hash="#"
      th1="Nama"
      th2="Email"
      th3="Status"
      th4="Tindakan"
      title="Daftar Penyelenggara"
      @next="nextPage"
      @prev="prevPage"
      @sort="sortBy"
      @clicked="searchValue"
    >
    <tbody>
      <tr v-for="data in organizers" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.status == 2 ? 'Disetujui' : data.status == 3 ? 'Tidak Disetujui' : 'Menunggu' }}</td>
        <td class="d-flex" v-if="data.status == 2">
          <button class="btn btn-sm evn-btn approved mr-2" @click="setuju(data.id)">
            <i class="fas fa-user-check mr-2"></i>Setuju
          </button>
          <button class="btn btn-sm btn-outline-light delete" @click="hapus(data.id)">
            <i class="fas fa-ban mr-2"></i>Batal
          </button>
        </td>
        <td class="d-flex" v-else-if="data.status == 3">
          <button class="btn btn-sm btn-outline-light approved mr-2" @click="setuju(data.id)">
            <i class="fas fa-user-check mr-2"></i>Setuju
          </button>
          <button class="btn btn-sm evn-btn delete" @click="hapus(data.id)">
            <i class="fas fa-ban mr-2"></i>Batal
          </button>
        </td>
        <td class="d-flex" v-else>
          <button class="btn btn-sm btn-outline-light approved mr-2" @click="setuju(data.id)">
            <i class="fas fa-user-check mr-2"></i>Setuju
          </button>
          <button class="btn btn-sm btn-outline-light delete" @click="hapus(data.id)">
            <i class="fas fa-ban mr-2"></i>Batal
          </button>
        </td>
      </tr>
    </tbody>
    </tables>
    <footers />
    <!-- <modal title="Daftar Penyelenggara" button="Setuju" type="button" dismiss="modal" @clicked="setuju" id="organizer-agree">
      <p>Yakin ingin menyetujui penyelenggara ini?</p>
    </modal> -->
    <!-- <modal title="Hapus Penyelenggara" button="Hapus" type="button" dismiss="modal" @clicked="hapus(this.data.id)" id="organizer-delete">
      <p>Yakin ingin menghapus penyelenggara ini?</p>
    </modal> -->
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import tables from '@/components/Tabel.vue'
import footers from '@/components/_module/Footer.vue'
// import modal from '@/components/Modal.vue'

export default {
  name: 'AdminOrganizerList',
  components: {
    tables,
    footers
    // modal
  },
  data () {
    return {
      page: 1,
      totalPage: 0,
      sort: 0
    }
  },
  methods: {
    ...mapActions('admin', ['getAllOrganizers', 'deleteOrganizer', 'approveOrganizer', 'searchOrganizer', 'organizerOldest', 'organizerNewest']),
    setuju (id) {
      console.log('Setuju' + id)
      this.approveOrganizer(id)
    },
    hapus (id) {
      // console.log(id)
      this.deleteOrganizer({ id: id, token: this.local.token })
    },
    searchValue () {
      // console.log(this.search)
      this.searchOrganizer(this.search)
    },
    sortBy () {
      if (this.sort === 0) {
        this.sort = 1
        console.log(this.sort)
        this.organizerOldest()
      } else {
        this.sort = 0
        console.log(this.sort)
        this.organizerNewest()
      }
    },
    nextPage () {
      this.total()
      if (this.page < this.totalPage && this.page !== this.totalPage) {
        this.page = this.page + 1
      } else {
        this.page = this.totalPage
      }
      this.getAllPages(this.page)
      // console.log(this.page)
    },
    prevPage () {
      this.total()
      if (this.page > 0 && this.page !== 1) {
        this.page -= 1
      } else {
        this.page = 1
      }
      this.getAllPages(this.page)
      // console.log(this.page)
    },
    total () {
      // console.log(this.totalEvents)
      this.totalPage = Math.ceil(this.totalEvents / 10)
      // console.log(this.totalPage)
    }
  },
  mounted () {
    // console.log(this.id)
    this.getAllOrganizers()
  },
  computed: {
    ...mapState('admin', ['organizers']),
    ...mapState('event', ['organizerEvents']),
    ...mapState('user', ['user', 'local']),
    ...mapState('general', ['search'])
  }
}
</script>

<style lang="scss" scoped>
  .btn-1, .btn-2{
    border-radius: 20px;
  }
</style>
