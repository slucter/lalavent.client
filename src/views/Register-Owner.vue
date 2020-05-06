<template>
  <div class="container-register evn-primary">
    <div class="left-register">
      <div class="title-register">
        <h5 class="evn-title">Daftar sebagai
          Penyelenggara</h5>
      </div>
    </div>
    <div class="right-register">
      <div class="body-register">
        <div class="leftside-register">
          <div class="form-register evn-title">
            <label for="email">Email</label>
            <input v-model="$v.email.$model" type="email" id="email" placeholder="event@lalavent.com">
            <div class="error-msg"><p v-if="!$v.email.email">Belum sesuai format!</p></div>
          </div>
          <div class="form-register evn-title">
            <label for="password">Kata Sandi</label>
            <input v-model="$v.password.$model" type="password" id="password" placeholder="Kata Sandi">
            <div class="error-msg"><p v-if="!$v.password.minLength">Wajib diisi! Minimal 6 karakter!</p></div>
          </div>
          <div class="form-register evn-title">
            <label for="name">Nama Penyelenggara</label>
            <input v-model="$v.name.$model" type="text" id="name" placeholder="Lalavent">
            <div class="error-msg"><p v-if="!$v.name.minLength">Wajib diisi! Minimal 4 karakter!</p></div>
          </div>
        </div>
        <div class="rightside-register">
          <div class="form-register evn-title">
            <label for="address">Alamat</label>
            <input v-model="$v.address.$model" class="address"  type="text" id="address" placeholder="Jalan Pesona Depok Estate">
            <div class="error-msg"><p v-if="!$v.address.minLength">Wajib diisi! Minimal 10 karakter!</p></div>
          </div>
          <div class="form-register evn-title">
            <label for="description">Deskripsi</label>
            <input v-model="$v.description.$model" class="description" type="text" id="description" placeholder="Deskripsi...">
            <div class="error-msg"><p v-if="!$v.description.maxLength">Wajib diisi! Maksimal 10 karakter!</p></div>
          </div>
        </div>
      </div>
      <div class="account evn-title">
        <p>Sudah punya akun? <router-link to="/login"> Masuk </router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
// import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      address: '',
      description: ''
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
    },
    address: {
      required,
      minLength: minLength(10)
    },
    description: {
      required,
      maxLength: maxLength(100)
    }
  }

}
</script>

<style lang="scss" scoped>
.container-register{
  display: flex;
  flex-direction: column;
  .left-register{
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../assets/img/owner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    .title-register{
      margin: 200px 0 0 130px;
      h5{
        font-size: 55px;
        font-weight: bolder;
        color: white;
      }
    }
  }
  .right-register{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .body-register{
      display: flex;
      padding: 50px 130px 20px 130px;
      .leftside-register{
        .form-register{
          display: flex;
          flex-direction: column;
          label{
            font-size: 14px;
            color: white;
            margin: 20px 0 0;
          }
          input{
            height: 35px;
            width: 400px;
            padding: 10px;
            border-radius: 5px;
          }
          .error-msg{
            p{
              margin: 3px 0 0;
              color: #f1c40f;
            }
          }
        }
      }
      .rightside-register{
        margin: 0 100px;
        .form-register{
          display: flex;
          flex-direction: column;
          label{
            font-size: 14px;
            color: white;
            margin: 20px 0 0;
          }
          input{
            border-radius: 5px;
          }
          .address{
            height: 35px;
            width: 570px;
            padding: 10px;
          }
          .description{
            height: 112px;
            width: 570px;
            padding: 10px;
          }
          .error-msg{
            p{
              margin: 3px 0 0;
              color: #f1c40f;
            }
          }
        }
      }
    }
    .account{
      margin: 0 130px;
      color: white;
    }
  }
}
</style>
