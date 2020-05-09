<template>
  <div class="home evn-primary">
    <ProfilUser />
    <Table
      hash="#"
      th1="Nama Event"
      th2="Tanggal"
      th3="Tempat"
      th4="Penyelenggara"
      title="History Event"
    >
    <tbody>
      <tr v-for="event in historyEvent" :key="event.id">
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
import { mapActions, mapState } from 'vuex'
import ProfilUser from '../components/ProfilUser'
import Footer from '../components/_module/Footer.vue'
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
    ProfilUser,
    Footer,
    Table
  },
  methods: {
    ...mapActions('profil', 'historyEvent')
  },
  mounted () {
    this.historyEvent()
  },
  computed: {
    ...mapState('profil', 'myHistory')
  }
}
</script>

<style lang="scss" scoped>

</style>
