<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="profil-user d-flex flex-row flex-wrap col-md-12">
            <div class="side-profil">
              <div class="photo-profil">
                <img src="../assets/profil-sulfikardi.jpg" alt="">
              </div>
              <div class="edit-button d-flex flex-column">
                <a href="#" class="btn btn-outline-light mb-3">Edit Profil</a>
                <a href="#" class="btn btn-outline-light">Cancel</a>
              </div>
            </div>
            <div class="edit-profil">
              <div class="identitas">
                <h4>Personal Profil</h4>
                <div class="tittle">
                  <div class="tittle-name">
                    <h5>Name</h5>
                    <h5>Email</h5>
                    <h5>Address</h5>
                    <h5>Phone Number</h5>
                    <h5>Gender</h5>
                  </div>
                  <div class="tittle-value">
                    <h5>Sulfikardi</h5>
                    <h5>Sulfikardi</h5>
                    <h5>Sulfikardi</h5>
                    <h5>Sulfikardi</h5>
                    <h5>Male</h5>
                  </div>
                </div>
              </div>
              <div class="bank">
                <h4>Bank Account</h4>
                <h5>Bank</h5>
                <h5>Account Number</h5>
                <h5>Account Name</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profil-User'
}
</script>

<style lang="scss" scoped>
  .profil-user{
    height: 600px;
    // width: 100%;
    margin-top: 70px;
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
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      color: #fff;
      margin-left: 90px;
      margin-top: 80px;
      .identitas{
        // border-left: 1px solid #fff;
        .tittle{
          display: flex;
          .tittle-name{
            margin-right: 90px;
          }
        }
      }
    }
  }
  .hide{
    display: none;
  }
</style>
