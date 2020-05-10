<template>
  <div class="evn-primary">
    <ProfilUser />
    <Footer/>
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import ProfilUser from '../components/ProfilUser'
import Footer from '../components/_module/Footer.vue'
export default {
  name: 'Profil',
  components: {
    ProfilUser,
    Footer
  },
  methods: {
  },
  mounted () {
    // this.historyEvent()
  },
  computed: {
    // ...mapState('profil', ['myHistory'])
  }

}
</script>

<style>

</style>
