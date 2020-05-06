<template>
  <div>
    <div class="container py-3">
      <div class="card evn-secondary px-3">
        <div class="card-body">
          <h1 class="text-center text-light evn-title">{{ title }}</h1>
          <div class="d-flex justify-content-between">
            <div class="search">
              <form class="form-inline mb-2">
                <div class="form-group">
                  <input type="text" class="form-control mr-2" placeholder="Cari Data">
                </div>
                <div class="form-group">
                  <button type="button" class="form-control evn-btn text-light"><i class="fas fa-search"></i></button>
                </div>
              </form>
            </div>
            <div class="sort">
              <form class="form-inline">
                <div class="form-group">
                  <label for="exampleFormControlSelect1" class="text-light mr-4 evn-title">Sort By</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>All</option>
                    <option>Event Terbaru</option>
                    <option>Dalam Waktu Dekat</option>
                  </select>
                </div>
              </form>
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
            <!-- <nav aria-label="Page navigation example">
            <ul class="pagination d-flex justify-content-center">
              <li class="page-item "><a class="page-link evn-secondary text-light" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link evn-secondary text-light" href="#">1</a></li>
              <li class="page-item"><a class="page-link evn-secondary text-light" href="#">2</a></li>
              <li class="page-item"><a class="page-link evn-secondary text-light" href="#">3</a></li>
              <li class="page-item"><a class="page-link evn-secondary text-light" href="#">Next</a></li>
            </ul>
          </nav> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabel',
  props: ['hash', 'th1', 'th2', 'th3', 'th4', 'title'],
  data () {
    return {
      datas: 10
    }
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
</style>>
