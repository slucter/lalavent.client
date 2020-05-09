<template>
  <div class="evn-primary">
    <ProfilUser />
    <Footer/>
  </div>
</template>

<script>
import ProfilUser from '../components/ProfilUser'
import Footer from '../components/_module/Footer.vue'
export default {
  name: 'Profil',
  components: {
    ProfilUser,
    Footer
  }

}
</script>

<style>

</style>
