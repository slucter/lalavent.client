<template>
  <div>
    <div class="container mt-5 mb-5">
      <div class="card evn-secondary">
        <div class="card-body d-flex justify-content-start">
          <div class="photo-profil">
            <div class="photo mb-4 d-flex flex-column">
              <img :src="myProfil.image" alt="" class="mb-2">
              <div class="upload-btn-wrapper mx-auto">
                <button class="btn evn-desc">Upload a file</button>
                <input type="file" ref="file" name="myfile" />
              </div>
            </div>
            <div class="action-button d-flex flex-column">
              <Button class="mb-4" @btn-click="editInput" v-if="this.editData">Edit Profil</Button>
              <Button class="mb-4" @btn-click="cancelEdit" v-else>Cancel</Button>
              <Button @btn-click="editUser" data-toggle="modal" data-target="#edit-profil">Save</Button>
            </div>
          </div>
          <div class="profil-user">
            <div class="info-user">
              <h4 class="text-light evn-title text-center">Informasi Pribadi</h4>
            </div>
            <div class="user-detail">
              <form>
                  <div class="form-group">
                    <label for="staticname" class="col-sm-4 col-form-label evn-desc">Nama</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="staticname" v-model="myProfil.name">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="staticEmail" class="col-sm-4 col-form-label evn-desc">Email</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="staticEmail" v-model="myProfil.email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="staticalamat" class="col-sm-6 col-form-label evn-desc">Alamat</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="staticalamat" v-model="myProfil.address">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="deskripsi" class="col-sm-6 col-form-label evn-desc">Deskripsi</label>
                    <div class="col-sm-12">
                      <input type="text" readonly class="form-control-plaintext evn-desc" id="deskripsi" v-model="myProfil.description">
                    </div>
                  </div>
              </form>
              <modal title="Update Personal Profil" button="Ok" id="edit-profil">
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
export default {
  name: 'Profil-User',
  components: {
    Button,
    modal
  },
  data () {
    return {
      editData: true,
      id: 1,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg4OTM5Mzk1fQ.S3QFwxeFPTibayKdnzUzKkrPQTqvpbvz_MvVMx0BKe0',
      password: 12345,
      myData: []
    }
  },
  methods: {
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
    editUser () {
      const formData = new FormData()
      formData.append('name', this.myProfil.name)
      formData.append('email', this.myProfil.email)
      formData.append('password', this.myProfil.password)
      formData.append('image', this.$refs.file.files[0] || this.myProfil.image)
      formData.append('address', this.myProfil.address)
      formData.append('description', this.myProfil.description)
      this.$store.dispatch('editProfil', formData)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
    ...mapActions('profil', ['profilUser', 'editProfil'])
  },
  mounted () {
    this.profilUser()
  },
  computed: {
    ...mapState('profil', ['myProfil'])
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
