<template>
  <div id="app" class="evn-primary">
    <navbar v-if="login==true" />
    <div class="container" v-if="login==true">
      <router-view/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  },
  data () {
    return {
      login: false
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Rubik:wght@500&display=swap');

  *{
    margin: 0;
    padding: 0;
  }
  #app {
    min-height: 100vh;
  }
  .evn-primary{
    background-color: #2c3e50;
  }
  .evn-secondary{
    background-color: #34495e;
  }
  .evn-btn{
    background-color: #f1c40f;
  }
  .evn-btn:hover{
    background-color: #f39c12;
  }
  .evn-title{
    font-family: 'Rubik', sans-serif;
  }
  .env-desc{
    font-family: 'Poppins', sans-serif;
  }
</style>
