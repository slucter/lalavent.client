<template>
  <div>
    <div class="container py-3">
      <div class="card evn-secondary px-3">
        <div class="card-body">
          <h2 class="text-center text-light evn-title mb-4">{{ title }}</h2>
          <SearchSort @cari="$emit('clicked')" @sort="$emit('sort')" />
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
import SearchSort from '@/components/SearchSort'

export default {
  name: 'Tabel',
  props: ['hash', 'th1', 'th2', 'th3', 'th4', 'title'],
  data () {
    return {
      datas: 10
    }
  },
  components: {
    pagination,
    SearchSort
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
