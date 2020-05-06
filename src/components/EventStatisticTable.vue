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
    <nav aria-label="Page navigation example">
      <ul class="mb-4 pagination justify-content-center">
        <div class="pagination-container evn-desc evn-shadow d-flex flex-row">
          <li class="page-item"><a class="page-link text-white evn-secondary" href="#">Sebelumnya</a></li>
          <li class="page-item"><a class="page-link text-white evn-secondary" href="#">1</a></li>
          <li class="page-item"><a class="page-link text-white evn-secondary" href="#">2</a></li>
          <li class="page-item"><a class="page-link text-white evn-secondary" href="#">3</a></li>
          <li class="page-item"><a class="page-link text-white evn-secondary" href="#">Selanjutnya</a></li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import SearchSort from '@/components/SearchSort'
export default {
  name: 'EventStatisticTable',
  components: {
    SearchSort
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  .pagination-container {
    border-radius: 25px;
  }
  .page-item {
    .page-link {
      border: 1px solid transparent;
    }
    .page-link:hover {
      color: black !important;
      background-color: lightgray;
    }
  }
  .page-item:first-child {
    .page-link {
      border-top-left-radius: 25px !important;
      border-bottom-left-radius: 25px !important;
    }
  }
  .page-item:last-child {
    .page-link {
      border-top-right-radius: 25px !important;
      border-bottom-right-radius: 25px !important;
    }
  }
}
</style>
