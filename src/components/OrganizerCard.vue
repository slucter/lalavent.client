<template>
  <div class="card org-card evn-shadow evn-rounded evn-secondary text-white">
    <div class="card-body">
      <div class="row">
        <div class="col-md-2">
          <img :src="organizerImage" class="org-icon evn-shadow" alt="">
        </div>
        <div class="col-md-10 d-flex flex-column">
          <div class="pt-3">
            <h3 class="evn-title">{{ organizerName }}</h3>
            <p class="evn-desc">Total Events: {{ organizerEvents }}</p>
          </div>
          <p class="evn-desc">"{{ organizerDesc }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizerCard',
  props: [
    'organizerImage',
    'organizerName',
    'organizerEvents',
    'organizerDesc'
  ]
}
</script>

<style lang="scss" scoped>
.org-card {
  height: auto;
  .org-icon {
    width: 100%;
    border-radius: 50%;
  }
}
</style>
