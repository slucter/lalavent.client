<template>
  <section class="admin-event-list">
    <!-- Table -->
    <tables class="my-3"
      hash="#"
      th1="Nama Event"
      th2="Tanggal"
      th3="Status"
      th4="Tindakan"
      title="Daftar Acara"
      @next="nextPage"
      @prev="prevPage"
      @sort="sortBy"
      @clicked="searchValue"
    >
    <tbody>
      <tr v-for="data in events" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.title }}</td>
        <td>{{ data.date }}</td>
        <td>{{ data.status == 1 ? 'Disetujui' : data.status == 2 ? 'Selesai' : data.status == 3 ? 'Tidak Disetujui' : 'Menunggu'}}</td>
        <td class="d-flex" v-if="data.status == 1">
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
    <!-- <modal title="Daftar Acara" button="Setuju" id="event-agree">
      <p>Yakin ingin menyetujui acara ini?</p>
    </modal>
    <modal title="Hapus Acara" button="Hapus" id="event-delete">
      <p>Yakin ingin menghapus acara ini?</p>
    </modal> -->
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import tables from '@/components/Tabel.vue'
import footers from '@/components/_module/Footer.vue'
// import modal from '@/components/Modal.vue'

export default {
  name: 'AdminEventList',
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
    ...mapActions('event', ['getAllEvents', 'searchEvent', 'totalEvent', 'getAllPages', 'eventNewest', 'eventOldest']),
    ...mapActions('admin', ['approveEvent', 'deleteEvent']),
    setuju (id) {
      // console.log(this.local.token)
      this.approveEvent({ id: id, token: this.local.token })
    },
    hapus (id) {
      console.log('hapus')
      this.deleteEvent({ id: id, token: this.local.token })
    },
    searchValue () {
      console.log(this.search)
      this.searchEvent(this.search)
    },
    sortBy () {
      if (this.sort === 0) {
        this.sort = 1
        console.log(this.sort)
        this.eventOldest()
      } else {
        this.sort = 0
        console.log(this.sort)
        this.eventNewest()
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
    this.getAllEvents()
    this.totalEvent()
  },
  computed: {
    ...mapState('event', ['events', 'totalEvents']),
    ...mapState('user', ['local']),
    ...mapState('general', ['search'])
  }
}
</script>

<style lang="scss" scoped>
  .btn-1, .btn-2{
    border-radius: 20px;
  }
</style>
