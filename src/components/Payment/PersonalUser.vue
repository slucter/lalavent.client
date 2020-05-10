<template>
  <div>
    <div class="card mb-5 evn-secondary text-light">
      <div class="card-body">
        <div class="personal">
          <div class="tittle-user mb-5">
            <h4>Informasi Personal</h4>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="nama" class="evn-title">Nama Lengkap<span class="star">*</span></label>
                <input type="text" class="form-control-plaintext evn-desc pl-2" id="nama" placeholder="Nama Lengkap" v-model="user.name">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email" class="evn-title">Alamat Email<span class="star">*</span></label>
                <input type="text" class="form-control-plaintext evn-desc pl-2" id="email" placeholder="Masukkan Email" v-model="user.email">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PersonalUser',
  methods: {
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
.personal{
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 40px;
  // margin-bottom: 40px;
}
.form-group input{
  outline: none;
  border-bottom: 1px solid #fff;
  color: #fff;
}
.form-group label{
  font-size: 20px;
}
</style>>
