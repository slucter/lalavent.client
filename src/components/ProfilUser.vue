<template>
  <div>
    <div class="container mt-3">
      <div class="card evn-secondary">
        <div class="card-body">
          <!-- <div class="row"> -->
            <!-- <div class="col-md-12"> -->
              <div class="profil-user d-flex flex-row col-md-12">
                <div class="side-profil">
                  <div class="photo-profil">
                    <img :src="profilUser.image" alt="">
                  </div>
                  <div class="edit-button d-flex flex-column">
                    <a href="#" class="btn btn-outline-light mb-3">Edit Profil</a>
                    <a href="#" class="btn btn-outline-light">Cancel</a>
                  </div>
                </div>
                <div class="edit-profil">
                  <div class="identitas">
                    <h4 class="mb-5">Personal Profil</h4>
                    <form>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-4 col-form-label">Name</label>
                        <div class="col-sm-12">
                          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
                        <div class="col-sm-12">
                          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-4 col-form-label">Address</label>
                        <div class="col-sm-12">
                          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="staticEmail" class="col-sm-6 col-form-label">Description</label>
                        <div class="col-sm-12">
                          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                        </div>
                      </div>
                    </form>
                    <!-- <div class="tittle">
                      <div class="tittle-name">
                        <h5>Name</h5>
                        <h5>Email</h5>
                        <h5>Address</h5>
                        <h5>Phone Number</h5>
                        <h5>Gender</h5>
                      </div>
                      <div class="tittle-value">
                        <h5>{{profilUser.name}}</h5>
                        <h5>{{profilUser.email}}</h5>
                        <h5>{{profilUser.address}}</h5>
                        <h5>{{profilUser.description}}</h5>
                        <h5>Male</h5>
                      </div>
                    </div> -->
                  </div>
                  <!-- <div class="bank">
                    <h4>Bank Account</h4>
                    <h5>Bank</h5>
                    <h5>Account Number</h5>
                    <h5>Account Name</h5>
                  </div> -->
                </div>
              </div>
            <!-- </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profil-User',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('profilUser')
  },
  computed: {
    profilUser () {
      return this.$store.state.myProfil
    }
  }
}
</script>

<style lang="scss" scoped>
  .profil-user{
    height: 600px;
    // overflow-y: scroll;
    margin-bottom: 10px;
    border: 1px solid #fff;
    .side-profil{
      margin-left: 60px;
      margin-top: 30px;
      .photo-profil{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        img{
          width: 250px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
    .edit-profil{
      color: #fff;
      margin-left: 150px;
      margin-top: 30px;
    }
  }
  .hide{
    display: none;
  }
</style>
