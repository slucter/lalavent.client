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
            <tr class="text-center evn-desc">
              <th scope="row">1</th>
              <td>The Paradox</td>
              <td>5 Mei 2020</td>
              <td>20.00 - 00.00</td>
              <td>Music</td>
              <td>Offline</td>
              <td>Jakarta, Indonesia</td>
              <td>2500</td>
              <td>1250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import SearchSort from '@/components/SearchSort'
import Pagination from '@/components/Pagination'
export default {
  name: 'EventStatisticTable',
  components: {
    SearchSort,
    Pagination
  }
}
</script>

<style lang="scss" scoped>

</style>
