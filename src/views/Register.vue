<template>
  <div class="container-register evn-primary">
    <div class="left-login">
    </div>
    <div class="right-login">
      <div class="title-login">
        <h5 class="evn-title">Daftar</h5>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputName1" class="evn-title">Name</label>
          <input v-model="$v.name.$model" type="text" class="form-control" id="exampleInputName1">
          <div class="error-name">
            <p v-if="!$v.name.minLength">Wajib diisi! Minimal 4 karakter</p>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" class="evn-title">Email</label>
          <input v-model="$v.email.$model" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="evn-title">Password</label>
          <input v-model="$v.password.$model" type="password" class="form-control" id="exampleInputPassword1">
          <div class="error-password">
            <p v-if="!$v.password.minLength" >Minimal kata sandi 6 karakter</p>
          </div>
        </div>
        <button type="submit" class="btn evn-title evn-btn evn-btn:hover" @click="register">DAFTAR</button>
      </form>
      <div class="account evn-title">
        <p>Sudah punya akun?<router-link to="/register"> Masuk </router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
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
.container-register{
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
        .error-name{
          p{
            color: yellow;
            font-size: 12px;
            padding: 5px 0;
          }
        }
        .error-password{
          p{
            color: yellow;
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
