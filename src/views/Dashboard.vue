<template>
<div class="container">
  <div class="d-flex justify-content-between row mt-5 mb-5">
    <div class="card evn-shadow evn-rounded evn-secondary text-white" style="width: 21rem;">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h5 class="card-title evn-title">Event Aktif</h5>
          </div>
          <div class="col">
            <h5 class="card-title evn-title d-flex flex-row-reverse"><router-link to="/event-active">Detail</router-link></h5>
          </div>
        </div>
        <hr class="border-light">
        <h1 class="card-title">0 <span class="star">Event</span></h1>
      </div>
    </div>
    <div class="card evn-shadow evn-rounded evn-secondary text-white" style="width: 21rem;">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h5 class="card-title evn-title">Event Selesai</h5>
          </div>
          <div class="col">
            <h5 class="card-title evn-title d-flex flex-row-reverse"><router-link to="/event-past">Detail</router-link></h5>
          </div>
        </div>
        <hr class="border-light">
        <h1 class="card-title">0 <span class="star">Event</span></h1>
      </div>
    </div>
    <div class="card evn-shadow evn-rounded evn-secondary text-white" style="width: 21rem;">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h5 class="card-title evn-title">Total Transaksi</h5>
          </div>
        </div>
        <hr class="border-light">
        <h1 class="card-title">0</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="scss" scoped>
.star{
  font-size: 17px;
}
</style>
