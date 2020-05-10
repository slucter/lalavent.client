<template>
  <div class="profile-user">
    <div class="container mt-5 mb-5">
      <div class="card evn-secondary">
        <div class="card-body d-flex justify-content-start">
          <div class="photo-profil">
            <div class="photo mb-4 d-flex flex-column">
              <img :src="user.image" alt="" class="mb-2">
              <div class="upload-btn-wrapper mx-auto">
                <button class="btn evn-desc">Upload a file</button>
                <input type="file" ref="file" name="myfile" @change="upload"/>
              </div>
            </div>
            <div class="action-button d-flex flex-column">
              <Button class="mb-4" @btn-click="editInput" v-if="this.editData == true">Edit Profil</Button>
              <Button class="mb-4" @btn-click="cancelEdit" v-else>Cancel</Button>
              <Button @btn-click="editUser" data-toggle="modal" data-target="#edit-profil">Save</Button>
            </div>
          </div>
          <div class="profil-user">
            <div class="info-user">
              <h4 class="text-light evn-title text-center">Informasi Pribadi</h4>
            </div>
            <div class="user-detail">
              <form @submit="editUser">
                  <div class="form-group">
                    <label for="staticname" class="col-sm-4 col-form-label evn-desc">Nama</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="staticname" v-model="user.name">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="staticEmail" class="col-sm-4 col-form-label evn-desc">Email</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="staticEmail" v-model="user.email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="staticalamat" class="col-sm-6 col-form-label evn-desc">Alamat</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="staticalamat" v-model="user.address">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="deskripsi" class="col-sm-6 col-form-label evn-desc">Deskripsi</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="deskripsi" v-model="user.description">
                    </div>
                  </div>
              </form>
              <modal title="Update Personal Profil" button="Ok" id="edit-profil" @clicked="coba" dismiss="modal">
                <p>Data Anda Berhasil Dirubah!</p>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from '@/components/Button'
import modal from '@/components/Modal.vue'
import axios from 'axios'

export default {
  name: 'Profil-User',
  components: {
    Button,
    modal
  },
  data () {
    return {
      editData: true,
      image: null
    }
  },
  methods: {
    coba () {
      console.log('hello')
    },
    editInput () {
      const listInput = document.querySelectorAll('.form-control-plaintext')
      listInput.forEach((e) => {
        e.removeAttribute('readonly')
        e.classList.add('inputEdit')
      })
      this.editData = false
    },
    cancelEdit () {
      const listInput = document.querySelectorAll('.form-control-plaintext')
      listInput.forEach((e) => {
        e.setAttribute('readonly', '')
        e.classList.remove('inputEdit')
      })
      this.editData = true
    },
    upload () {
      const file = this.$refs.file.files[0]
      this.image = file
    },
    editUser () {
      const formData = new FormData()
      formData.append('name', this.user.name)
      formData.append('email', this.user.email)
      formData.append('password', this.user.password)
      formData.append('image', this.image || this.user.image)
      formData.append('address', this.user.address)
      formData.append('description', this.user.description)
      axios
        .put(process.env.VUE_APP_BASE_URL + 'user/' + this.local.id, formData, {
          headers: { 'baca-bismillah': this.local.token }
        }).then(res => {
          this.cancelEdit()
          console.log(res)
        })
    },
    ...mapActions('user', ['getUserById'])
  },
  mounted () {
    this.getUserById()
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('user', ['local'])
  }
}
</script>

<style lang="scss" scoped>
 .photo-profil .photo img{
   width: 250px;
   height: 250px;
 }
 .photo-profil{
   margin-right: 110px;
 }
 .form-group input{
   width: 400px;
   outline: none;
   color: #fff;
 }
 .info-user{
   margin-bottom: 22px;
 }
 .form-group label{
   color: #fff;
   font-size: 20px;
 }
 .inputEdit{
   border-bottom: 1px solid #fff;
 }
  .hide{
    display: none;
  }
  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
  }
  .btn {
    border: 2px solid gray;
    color: gray;
    color: #fff;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
  }
  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
</style>
