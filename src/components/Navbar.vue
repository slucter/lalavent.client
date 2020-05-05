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
        <a class="navbar-brand" href="#">Lalavent</a>
      </div>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item mr-4">
            <i class="fas fa-calendar-alt mr-2"></i>
            <a class="nav-link" href="#">Semua Event</a>
          </li>
          <li class="nav-item">
            <i class="fas fa-sign-in-alt mr-2"></i>
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
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
</style>
