<template>
  <div class="home evn-primary">
    <!-- <ProfilUser /> -->
    <!-- <Tabel /> -->
    <Jumbotron />
    <NavCaty />
    <div class="card-lists d-flex flex-wrap justify-content-center mb-4 pt-3">
          <CardEvent v-for="data in datas" :key="data.id"/>
    </div>
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-md-7 d-flex justify-content-center">
        <h3 class="lead text-warning evn-desc">Event selengkapnya ></h3>
      </div>
    </div>
    <sEasy />
    <Footer/>
    <!-- <SmallFooter/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import ProfilUser from '../components/ProfilUser'
// import Tabel from '../components/Tabel'
import Footer from '../components/_module/Footer.vue'
// import SmallFooter from '../components/_module/Small-Footer.vue'
import Jumbotron from '../components/_module/Jumbotron.vue'
import sEasy from '../components/_module/SectionEeasy.vue'
import NavCaty from '../components/_module/NavCategory.vue'
import CardEvent from '../components/EventList/CardEvent.vue'
// import SmallFooter from '../components/_module/Small-Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    CardEvent,
    NavCaty,
    sEasy,
    Jumbotron
    // SmallFooter

  }
}
</script>

<style lang="scss" scoped>

</style>
