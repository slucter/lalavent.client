<template>
  <div class="card evn-rounded evn-secondary evn-shadow mt-3">
    <SearchSort class="px-5 mt-4"/>
    <div class="card-body">
      <div class="table-responsive mt-3">
        <table class="table text-white">
          <thead>
            <tr class="text-center evn-title">
              <th scope="col">#</th>
              <th scope="col">Event</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Waktu</th>
              <th scope="col">Kategori</th>
              <th scope="col">Tipe</th>
              <th scope="col">Lokasi</th>
              <th scope="col">Kuota</th>
              <th scope="col">Pengunjung Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in organizerEvents" :key="data.id" class="text-center evn-desc">
              <th scope="row">{{ data.id }}</th>
              <td>{{ data.title }}</td>
              <td>{{ data.date }}</td>
              <td>
                {{ data.time_start }}
                 - {{ data.time_end }}
                <span v-if="data.time_end === ''">Selesai</span>
              </td>
              <td>{{ data.category.name }}</td>
              <td>
                <span v-if="data.type === true">{{ eventType[0] }}</span>
                <span v-if="data.type === false">{{ eventType[1] }}</span>
              </td>
              <td>{{ data.location }}</td>
              <td>{{ data.quota }}</td>
              <td>{{ data.attend === null ? '-' : 'Pengunjung' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import SearchSort from '@/components/SearchSort'
import Pagination from '@/components/Pagination'
export default {
  name: 'EventStatisticTable',
  data () {
    return {
      local: {
        id: null
      },
      eventType: ['Online', 'Offline']
    }
  },
  components: {
    SearchSort,
    Pagination
  },
  created () {
    const parsed = JSON.parse(localStorage.getItem('items'))
    if (parsed) {
      this.local = parsed
    }
  },
  methods: {
    ...mapActions('user', ['getUserById', 'getLocalStorage']),
    ...mapActions('event', ['getEventsByOrganizer'])
  },
  mounted () {
    this.getEventsByOrganizer(this.local.id)
    this.getLocalStorage(this.local)
    this.getUserById(this.local.id)
  },
  computed: {
    ...mapState('event', ['organizerEvents']),
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>

</style>
