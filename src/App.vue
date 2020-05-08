<template>
  <div id="app" class="evn-primary">
    <navbar v-if="dontDisplay" />
    <div class="container" v-if="dontDisplay">
      <router-view/>
    </div>
    <small-footer v-if="dontDisplay" />
      <router-view  v-if="!dontDisplay" />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import Footer from '@/components/_module/Footer.vue'
import SmallFooter from '@/components/_module/Small-Footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    'small-footer': SmallFooter
  },
  data () {
    return {
      login: '/login',
      register: '/register',
      register2: '/register-organizer'
    }
  },
  computed: {
    dontDisplay () {
      return this.$route.path !== this.login && this.$route.path !== this.register && this.$route.path !== this.register2
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
  .evn-desc{
    font-family: 'Poppins', sans-serif;
  }
  .evn-shadow{
    box-shadow: 0 0px 10px 0 #000000, 0 0px 5px 0 #000000;
  }
  .evn-rounded{
    border-radius: 10px;
  }
  a{
    color: #ffffff;
  }
  a:hover{
    color: #ffffff;
    text-decoration: none;
  }
</style>
