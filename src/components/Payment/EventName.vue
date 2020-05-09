<template>
  <div>
    <div class="card evn-secondary text-light mt-5 mb-5">
      <div class="card-body">
        <div class="banner">
          <div class="event-name">
            <div class="info-event evn-title">
              <h2>Charity Concert, Stay Safe Guest Star: Anji</h2>
            </div>
            <div class="type">
              <span class="evn-desc">Concert</span>
            </div>
          </div>
          <hr class="text-light">
          <div class="event-detail d-flex flex-wrap justify-content-between">
            <div class="orgnz">
              <p class="evn-title">Diselenggarakan oleh</p>
              <div class="orgnz-name d-flex flex-wrap">
                <div class="icon-orgnz">
                  <img src="../../assets/img/icon-orgz.jpg" alt="">
                </div>
                <div class="name-orgnz">
                  <p class="evn-desc">Aryatama New Live Production</p>
                </div>
              </div>
            </div>
            <div class="tanggal">
              <p class="evn-title">Tanggal & Waktu</p>
              <div class="tgl-mulai mb-3">
                <i class="far fa-calendar-alt fa-2x mr-2"></i>
                <span class="evn-desc">11 May 2020 - 11 May 2020</span>
              </div>
              <div class="jam-mulai mb-4">
                <i class="far fa-clock fa-2x mr-2"></i>
                <span class="evn-desc">20:00 - 22:00 WIB</span>
              </div>
            </div>
            <div class="lokasi">
              <p class="evn-title">Lokasi</p>
              <div class="lokasi-event">
                <i class="fas fa-map-marker-alt fa-2x mr-2"></i>
                <span class="evn-desc">Event Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventName'
}
</script>

<style lang="scss" scoped>
  .banner{
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
  .icon-orgnz img{
    width: 60px;
  }
  .name-orgnz{
    width: 150px;
    padding: 10px;
    box-sizing: border-box;
  }
  hr{
    background-color: #ffff;
  }
</style>>
