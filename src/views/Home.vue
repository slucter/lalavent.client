<template>
  <div class="home evn-primary">
    <!-- <ProfilUser /> -->
    <Tabel />
    <Footer/>
    <SmallFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
// import ProfilUser from '../components/ProfilUser'
import Tabel from '../components/Tabel'
import Footer from '../components/_module/Footer.vue'
import SmallFooter from '../components/_module/Small-Footer.vue'

export default {
  name: 'Home',
  components: {
    // ProfilUser,
    Tabel,
    Footer,
    SmallFooter
  }
}
</script>

<style lang="scss" scoped>

</style>
