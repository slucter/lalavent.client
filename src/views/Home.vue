<template>
  <div class="home evn-primary">
    <ProfilUser />
    <Footer/>
    <!-- <SmallFooter/> -->
  </div>
</template>

<script>
import ProfilUser from '../components/ProfilUser'
import Footer from '../components/_module/Footer.vue'
// import SmallFooter from '../components/_module/Small-Footer.vue'

export default {
  name: 'Home',
  components: {
    ProfilUser,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
