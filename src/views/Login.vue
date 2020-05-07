<template>
  <div class="container-login evn-primary">
    <div class="left-login">
    </div>
    <div class="right-login">
      <div class="title-login">
        <h5 class="evn-title">Masuk</h5>
      </div>
      <form class="mt-2 text-white">
        <div class="form-group">
          <label for="email" class="evn-title">Email<span class="star">*</span></label>
          <input type="email" placeholder="event@lalavent.com" :class="$v.email.$error ? 'form-control is-invalid' : 'form-control'" v-model="email">
          <p v-if="$v.email.$error"  class="invalid-feedback">Email belum diisi!</p>
        </div>
        <div class="form-group">
          <label for="password" class="evn-title">Kata Sandi<span class="star">*</span></label>
          <input type="password" placeholder="Kata Sandi" :class="$v.password.$error ? 'form-control is-invalid' : 'form-control'" v-model="password">
          <p v-if="$v.password.$error" class="invalid-feedback">Kata Sandi harus diisi!</p>
        </div>
        <div class="mt-4">
          <Button @btn-click="submitEvent">Masuk</Button>
        </div>
      </form>
      <div class="account evn-title">
        <p>Belum punya akun? <router-link to="/register">Daftar</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Button from '../components/Button.vue'

export default {
  name: 'Register',
  components: {
    Button
  },
  data () {
    return {
      title: '',
      email: '',
      password: '',
      submitStatus: false
    }
  },
  validations: {
    title: { required },
    email: { required },
    password: { required }
  },
  methods: {
    submitEvent () {
      this.submitStatus = true
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        // eslint-disable-next-line no-useless-return
        return
      } else {
        console.log('Submit ok')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-login{
  display: flex;
  .left-login{
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../assets/img/event.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 60%;
    height: 100vh;
  }
  .right-login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 140px;
    .title-login{
      h5{
        font-size: 50px;
        font-weight: bolder;
        color: white;
      }
    }
    label {
      font-size: 1.5rem;
    }
    .star {
      color: #f1c40f;
    }
    .is-invalid {
      border-color: red !important;
    }
    .invalid-feedback {
      color: red;
    }
    .account{
      p{
        margin: 20px 0;
      }
    }
  }
}
</style>
