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
    <Table
      hash="#"
      th1="Nama Event"
      th2="Tanggal"
      th3="Tempat"
      th4="Penyelenggara"
      title="History Event"
    >
    <tbody>
      <tr v-for="event in myHistory" :key="event.id">
        <td>{{event.id}}</td>
        <td>{{event.title}}</td>
        <td>{{event.date}}</td>
        <td>{{event.category.name}}</td>
        <td>{{event.location}}</td>
      </tr>
    </tbody>
    </Table>
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
import { mapActions, mapState } from 'vuex'
import Table from '../components/Tabel'
// import SmallFooter from '../components/_module/Small-Footer.vue'

export default {
  name: 'Home',
  data () {
    return {
      hari: new Date('9,mey,2020')
    }
  },
  components: {
    Footer,
    Table,
    CardEvent,
    NavCaty,
    sEasy,
    Jumbotron
    // SmallFooter

  },
  methods: {
    ...mapActions('profil', ['historyEvent'])
  },
  mounted () {
    this.historyEvent()
  },
  computed: {
    ...mapState('profil', ['myHistory'])
  }
}
</script>

<style lang="scss" scoped>

</style>
