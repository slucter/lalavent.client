<template>
  <div class="container-register evn-primary">
    <div class="up-register">
      <div class="title-register">
        <h5 class="evn-title">Daftar sebagai Penyelenggara</h5>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 text-white">
          <div class="form-group">
            <label for="title" class="evn-title">Nama Penyelenggara<span class="star">*</span></label>
            <input type="text" placeholder="Lalavent" :class="$v.name.$error ? 'form-control is-invalid' : 'form-control'" v-model="name">
            <p v-if="$v.name.$error" class="invalid-feedback">Nama Penyelenggara harus diisi!</p>
          </div>
          <div class="form-group">
            <label for="location" class="evn-title">Alamat<span class="star">*</span></label>
            <input type="text" placeholder="Jalan Pesona Depok Estate" :class="$v.address.$error ? 'form-control is-invalid' : 'form-control'" v-model="address">
            <p v-if="$v.address.$error" class="invalid-feedback">Alamat harus diisi!</p>
          </div>
        </div>
        <div class="col-md-6 text-white">
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
        </div>
      </div>
      <hr class="border-light">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="description" class="evn-title text-white">Deskripsi<span class="star">*</span></label>
            <textarea placeholder="Deskripsi..."  :class="$v.description.$error ? 'form-control is-invalid' : 'form-control'" v-model="description" rows="10"></textarea>
            <p v-if="$v.description.$error" class="invalid-feedback">Deskripsi event harus diisi!</p>
          </div>
        </div>
      </div>
      <div class="mt-4 d-flex flex-row-reverse">
        <Button @btn-click="submitEvent">Daftar</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Button from '../components/Button.vue'
import axios from 'axios'

export default {
  name: 'Login',
  components: {
    Button
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      address: '',
      description: '',
      submitStatus: false
    }
  },
  validations: {
    name: { required },
    email: { required },
    password: { required },
    address: { required },
    description: { required }
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
        axios.post('http://192.168.1.97:5000/api/lalavent/auth/signup', {
          name: this.name,
          address: this.address,
          email: this.email,
          password: this.password,
          description: this.description
        })
          .then((res) => {
            console.log(res)
            this.$router.push('/login')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-register{
  display: flex;
  flex-direction: column;
  .up-register{
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../assets/img/owner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title-register{
      margin: 200px 0 0 115px;
      h5{
        font-size: 55px;
        font-weight: bolder;
        color: white;
      }
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
}
</style>
