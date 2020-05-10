<template>
<div class="row mt-3 marbot">
    <div class="col-md-12 evn-desc evn-secondary py-3 px-5">
        <h3 class="display-4 evn-title text-warning">Event di #LalaventAja!</h3>
        <h3 class="lead evn-desc text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quo.</h3>
        <div class="evn-btn-grup d-flex">
            <a href="#" class="btn px-2 py-2 btn-warning btn-ronded text-light">Beli event online sekarang</a>
            <a href="#" class="btn px-2 py-2 btn-warning ml-5 btn-ronded text-light">Buat event online sekarang</a>
        </div>
    </div>
    <div class="col-md-12 mb-5">
        <div class="container-desc bg-warning" style="overflow: hidden;">
            <img src="../../assets/img/banner/1577782470_soEXf3.jpg" alt="y" style="border-top-left-radius: 61px;margin:15px 0px 0px 15px;width:600px; height: 400px">
       </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>
.btn-ronded{
    border-top-left-radius: 15px;
    -moz-border-radius-topleft: 15px;
    -webkit-border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    -moz-border-radius-bottomright: 15px;
    -webkit-border-bottom-right-radius: 15px;
}
.evn-btn-grup{
    position: absolute;
    top:150px;
}
.evn-transform{
    /* transform: rotate(-90deg); */
    font-size: 40px;
}
.evn-desc{
    border-bottom-left-radius: 81px;
-moz-border-radius-bottomleft: 81px;
-webkit-border-bottom-left-radius: 81px;

    height: 300px;
}

.container-desc{
    height: 400px;
    width: 350px;
    border-top-left-radius: 81px;
-moz-border-radius-topleft: 81px;
-webkit-border-top-left-radius: 81px;
border-bottom-right-radius: 82px;
-moz-border-radius-bottomright: 82px;
-webkit-border-bottom-right-radius: 82px;
    position: absolute;
    right: 0;
    top: -300px;

}

.marbot{
    margin-bottom: 100px;
}
</style>
