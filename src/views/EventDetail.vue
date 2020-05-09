<template>
<div>
    <div class="row">
       <div class="col-md-12 banner-w d-flex bg-light" style="border-bottom: 5px solid yellow;" >
            <img src="../assets/img/banner/logo.png"  class="img-fluid w-100" alt="banner">
       </div>
   </div>
   <div class="row">
        <div class="col-md-3 px-2 py-2 d-flex justify-content-center align-items-center evn-secondary" style="border-bottom-left-radius: 30px">
           <img src="../assets/img/thumb/intro_to_software_product_management_logo_060520142353.png" style="box-shadow: 1px 5px 10px 10px rgba(0,0,0,0.3); border-radius: 30px; width:180px; height: 180px;" class="img-fluid img-rounded" alt="thumb">
        </div>
        <div class="col-md-6 evn-secondary">
           <div class="card-title evn-title text-light py-3" style="font-size: 25px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ex.</div>
           <div class="card-text text-warning">Diselenggarakan oleh: Dicoding Event</div>
        </div>
       <div class="col-md-3 evn-secondary d-flex justify-content-start" style="border-bottom-right-radius: 30px">
            <ul class="list-group w-100 my-2 mx-2">
                <li class="list-group-item bg-transparent border-0 evn-title text-light">Terbuka Hingga</li>
                <li class="list-group-item bg-transparent border-0 text-light">May 14, 2020</li>
                <li class="list-group-item bg-transparent border-0 evn-title text-light">Sisa Kuota</li>
                <li class="list-group-item bg-transparent border-0 text-light">250 Peserta</li>
            </ul>
       </div>
   </div>
   <div class="row mt-3">
       <div class="col-md-8 evn-secondary px-4 py-3" style="border-top-left-radius: 30px">
           <h2 class="text-light evn-title">Deskripsi</h2>
           <p class="lead text-light evn-desc border-bottom">
               <br>Ditengah pandemi COVID-19 mari jadikan hari-harimu tetap produktif dan menambah pengetahuan dengan mengikuti Dicoding Event. Kali ini Dicoding kembali mengadakan event online dengan tema “Intro to Software Product Management”.
               <br><br>Dalam membangun sebuah software tidak hanya seputar coding atau pun design. Penting bagi kita untuk mengerti aspek-aspek penting dalam pengembangan software, mulai dari menentukan requirements atau spesifikasi sebuah software, planning, proses pengembangan, testing, hingga maintaining.
               <br><br>Pada event kali ini, Mas Nur Rohman akan share pengalaman seputar Software Product Management. Di sini teman-teman akan belajar bersama mengenai software yang baik, role yang ada dalam Software Product Management, sekilas tentang Agile, dan juga proses Software Product Management dari planning sampai maintaining.
               <br><br>
           </p>

           <h2 class="text-light evn-title">Rundown acara</h2>
           <ul class="list-group w-100 my-2 mx-2">
                <li class="list-group-item bg-transparent border-0 evn-title text-light">16.00 - 16.10 Pembukaan oleh moderator (Ziya El Arief - Product Developer)</li>
                <li class="list-group-item bg-transparent border-0 evn-title text-light">6.10 - 16.30 Nur Rohman - CPO Dicoding, materi yang akan dibawakan Intro to Software Product Management</li>
                <li class="list-group-item bg-transparent border-0 evn-title text-light">16.30 - 17.00 Q & A</li>
            </ul>
            <h3 class="lead evn-title mt-3 font-italic text-light">Note: setelah mendaftar dan mendapatkan tiket, Anda tidak perlu mendaftar ulang untuk konfirmasi kehadiran saat acara berlangsung</h3>
       </div>
       <div class="col-md-4 evn-secondary px-4 py-3" style="border-top-right-radius: 30px">
           <ul class="list-group w-100 my-4 mx-2">
                <li class="list-group-item border-0 bg-transparent px-3 py-3">
                    <button @click.prevent="$emit('btn-click')" class="text-light evn-title w-100  bg-warning evn-shadow btn-custom">
                        <slot>DAFTAR</slot>
                    </button>
                </li>
            </ul>

            <ul class="list-group w-100 my-2 mx-2">
                <li class="list-group-item bg-warning border-0 evn-title text-light mb-3">Jadwal Pelaksanaan</li>
                <li class="list-group-item bg-transparent border-0 evn-desc text-light">Mulai : <b>14 May 2020</b> 16:00</li>
                <li class="list-group-item bg-transparent border-0 evn-desc text-light">Selesai : <b>14 May 2020</b> 18:00</li>
            </ul>

             <ul class="list-group w-100 my-2 mx-2">
                <li class="list-group-item bg-warning border-0 evn-title text-light mb-3">Lokasi</li>
                <li class="list-group-item bg-transparent border-0 evn-desc text-light">
                    <i class="fas fa-map-marker-alt mr-3"></i>
                    Jakarta, DKI Jakarta, Jakarta Pusat
                </li>
                <li class="list-group-item bg-transparent border-0 evn-desc text-light">
                    Offline
                </li>
            </ul>
       </div>
   </div>
   <Footer />
   <SmallFooter />
</div>
</template>

<script>
import Footer from '../components/_module/Footer.vue'
import SmallFooter from '../components/_module/Small-Footer.vue'

export default {
  components: {
    Footer,
    SmallFooter
  }

}
</script>

<style scoped>
.btn-custom {
  padding: 5px 20px;
  border-radius: 25px;
}
</style>
