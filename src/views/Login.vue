<template>
  <div class="container-login evn-primary">
    <div class="left-login">
    </div>
    <div class="right-login">
      <div class="title-login">
        <h5 class="evn-title">Masuk</h5>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" class="evn-title">Email</label>
          <input v-model="$v.email.$model" type="email" class="form-control"
          id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="evn-title">Password</label>
          <input v-model="$v.password.$model" type="password"
          class="form-control" id="exampleInputPassword1">
          <div class="error-password">
            <p v-if="!$v.password.minLength">Minimal kata sandi 6 karakter</p>
          </div>
          <!-- <div class="error-password">
            <p v-if="!$v.password.minLength">Harus diisi</p>
          </div> -->
        </div>
        <button type="submit" class="btn evn-title evn-btn evn-btn:hover" @click="login">MASUK</button>
      </form>
      <div class="account evn-title">
        <p>Belum punya akun? <router-link to="/register"> Daftar </router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
// import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
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
        font-size: 35px;
        font-weight: bolder;
        color: white;
      }
    }
    form{
      .form-group{
        label{
          color: white;
        }
        .error-password{
          p{
            color: white;
            font-size: 12px;
            padding: 5px 0;
          }
        }
      }
      button{
        color: white;
      }
    }
    .account{
      padding: 20px 0;
      color: white;
    }
  }
}
</style>
