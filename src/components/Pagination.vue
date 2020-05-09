<template>
  <nav aria-label="Page navigation example">
    <ul class="mb-4 pagination justify-content-center">
      <div class="pagination-container evn-desc evn-shadow d-flex flex-row">
        <li class="page-item"><div class="page-link text-white evn-secondary" @click="$emit('prev')">Sebelumnya</div></li>
        <!-- <li class="page-item"><a class="page-link text-white evn-secondary" href="#">1</a></li>
        <li class="page-item"><a class="page-link text-white evn-secondary" href="#">2</a></li>
        <li class="page-item"><a class="page-link text-white evn-secondary" href="#">3</a></li> -->
        <li class="page-item"><div class="page-link text-white evn-secondary" @click="$emit('next')">Selanjutnya</div></li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style lang="scss" scoped>
.page-link{
  cursor: pointer;
}
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
