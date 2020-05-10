<template>
  <div>
    <div class="container py-3">
      <div class="card evn-secondary px-3">
        <div class="card-body">
          <h2 class="text-center text-light evn-title mb-4">{{ title }}</h2>
          <div class="d-flex justify-content-between">
            <div class="search">
              <form class="form-inline mb-2">
                <div class="form-group">
                  <input type="text" class="form-control mr-2" placeholder="Cari Data" @input="$emit('search', $event.target.value)">
                </div>
                <div class="form-group">
                  <button type="button" class="form-control evn-btn text-light"><i class="fas fa-search"></i></button>
                </div>
              </form>
            </div>
            <button class="btn btn-sm py-0 evn-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Semua Waktu</button>
            <div class="dropdown-menu">
              <div class="dropdown-item" @click="$emit('newest')">Terbaru</div>
              <div class="dropdown-item" @click="$emit('oldest')">Terlama</div>
            </div>
          </div>
          <div class="row table-responsive">
            <table class="table my-3 text-light">
              <thead class="evn-title">
                <tr>
                  <th scope="col">{{ hash }}</th>
                  <th scope="col">{{ th1 }}</th>
                  <th scope="col">{{ th2 }}</th>
                  <th scope="col">{{ th3 }}</th>
                  <th scope="col">{{ th4 }}</th>
                </tr>
              </thead>
              <!-- <tbody>
                <tr :v-for="data in datas" :key="data.id">
                  <th scope="row">{{ data }}</th>
                  <td>{{ td1 }}</td>
                  <td>{{ td2 }}</td>
                  <td>{{ td3 }}</td>
                  <td>{{ td4 }}</td>
                </tr>
              </tbody> -->
              <slot></slot>
            </table>
          </div>
        </div>
        <pagination @next="$emit('next')" @prev="$emit('prev')" />
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/Pagination'

export default {
  name: 'Tabel',
  props: ['hash', 'th1', 'th2', 'th3', 'th4', 'title'],
  data () {
    return {
      datas: 10
    }
  },
  components: {
    pagination
  }
}
</script>

<style lang="scss" scoped>
.page-link:hover{
  background-color: #34495e;
  color: #fff !important;
}
.row{
  margin-left: 0;
}
.hide{
  display: none;
}
.dropdown-item{
  cursor: pointer;
}
</style>
