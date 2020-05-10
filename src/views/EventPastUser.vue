<template>
<div class="container">
  <div class="px-3 mt-5 d-flex flex-row justify-content-between">
    <h3 class="evn-title text-white">Event yang Telah Selesai</h3>
  </div>
  <div class="card evn-rounded evn-secondary evn-shadow mt-3">
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
            </tr>
          </thead>
          <tbody>
            <tr class="text-center evn-desc">
              <th scope="row">1</th>
              <td>Cerita Cintaku</td>
              <td>5 Mei 2020</td>
              <td>19.00 - 22.00</td>
              <td>Stand Up Comedy</td>
              <td>Offline</td>
              <td>Jakarta, Indonesia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination/>
  </div>
</div>
</template>

<script>
export default {
  name: 'EventPastUser'
}
</script>

<style lang="scss" scoped>

</style>
