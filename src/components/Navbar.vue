<template>
  <!-- Image and text -->
  <nav class="navbar navbar-expand-lg navbar-dark evn-secondary sticky-top">
    <div class="container">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="fas fa-bars"></i>
      </button>
      <div class="brands">
        <i class="fas fa-campground mr-2"></i>
        <router-link to="/" class="navbar-brand">Lalavent</router-link>
      </div>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item mr-4">
            <i class="fas fa-calendar-alt mr-2"></i>
            <a class="nav-link" href="#">Semua Event</a>
          </li>
          <li class="nav-item mr-4 dropdown" v-if="isLogin == true">
            <img src="https://vectorified.com/images/default-image-icon-7.jpg" alt="profile-img" class="profile-img">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                <i class="fas fa-user-cog mr-1"></i>
                Edit Profile
              </a>
              <div class="dropdown-divider"></div>
              <router-link to="/logout" class="dropdown-item">
                <i class="fas fa-sign-out-alt mr-1"></i>
                Logout
              </router-link>
            </div>
          </li>
          <li class="nav-item mr-4" v-else>
            <i class="fas fa-sign-in-alt mr-2"></i>
            <a class="nav-link"> <router-link to="/login">Login</router-link> </a>
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isLogin: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-item{
    display: flex;
    align-items: center;
    color: #eeeeee;
    .fas{
      font-size: 20px;
    }
    .nav-link{
      color: #eeeeee;
    }
  }
  .brands{
    color: #eeeeee;
    .fas{
      font-size: 25px;
    }
  }
  .navbar-toggler{
    color: #eeeeee;
  }
  .profile-img{
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .dropdown-item{
    color: #2c3e50;
  }
</style>
