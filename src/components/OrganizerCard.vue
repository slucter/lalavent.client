<template>
  <div class="card org-card evn-rounded evn-secondary text-white">
    <div class="card-body">
      <div class="row">
        <div class="col-md-2">
          <img src="https://pbs.twimg.com/profile_images/1215680634615627778/Z7LARlZd_400x400.jpg" class="org-icon" alt="">
        </div>
        <div class="col-md-10 d-flex flex-column">
          <div class="pt-3">
            <h3 class="evn-title">Excision</h3>
            <p class="evn-desc">Total Events: 666</p>
          </div>
          <p class="evn-desc">Member sejak 17 Agustus 1945</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizerCard'
}
</script>

<style lang="scss" scoped>
.org-card {
  height: auto;
  box-shadow: 0 0px 20px 0 #000000, 0 0px 10px 0 #000000;
  .org-icon {
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0px 20px 0 #000000, 0 0px 10px 0 #000000;
  }
}
</style>
