<template>
  <div class="px-0 d-flex justify-content-between align-items-center text-white">
    <div>
      <div class="search-container py-2 px-3 evn-secondary evn-shadow evn-rounded d-flex flex-row align-items-center">
        <i class="fas fa-search"></i>
        <input type="text" @input="search" v-model="value" @change="$emit('cari')" class="search-input evn-desc ml-3 text-white" placeholder="Cari event...">
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <span :class="sortDesc ? 'd-none d-md-flex evn-desc text-muted' : 'd-none d-md-flex evn-desc'">Terbaru</span>
      <div @click="sortDesc = !sortDesc, $emit('sort')" class="sort px-2 mx-2 evn-shadow d-flex flex-row justify-content-around align-items-center">
        <i :class="sortDesc ? 'fas fa-long-arrow-alt-up fa-2x text-warning' : 'fas fa-long-arrow-alt-up fa-2x'" class=""></i>
        <i :class="sortDesc ? 'fas fa-long-arrow-alt-down fa-2x' : 'fas fa-long-arrow-alt-down fa-2x text-warning'"></i>
      </div>
      <span :class="sortDesc ? 'd-none d-md-flex evn-desc' : 'd-none d-md-flex evn-desc text-muted'">Terlama</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchSort',
  data () {
    return {
      sortDesc: false,
      value: null
    }
  },
  methods: {
    ...mapActions('general', ['searchInput']),
    search () {
      // console.log(this.value)
      this.searchInput(this.value)
    }
  },
  mounted () {
    this.searchInput('')
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  background-color: transparent;
  border: none;
  width: 100px;
  outline: none;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}
.sort {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f1c40f;
  color: #FFFFFF;
}
.sort:hover {
  color: #FFFFFF;
  background-color: #f39c12;
  cursor: pointer;
}
</style>
