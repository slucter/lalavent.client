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
        <td>{{ data.location }}</td>
        <td class="d-flex">
          <div class="btn btn-sm btn-outline-light approved mr-2" @click="setuju(data.id)">
            <i class="fas fa-user-check mr-2"></i>Setujui
          </div>
          <div class="btn btn-sm btn-outline-light delete" @click="hapus(data.id)">
            <i class="fas fa-trash mr-2"></i>Hapus
          </div>
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
