<template>
  <div class="container-footer container evn-primary">
    <div class="header-footer">
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Tentang Lalavent</h5>
        </div>
        <div class="content-footer env-desc">
          <div><p>Cara Kerja</p></div>
          <div><p>Lalavent Distirbution Program</p></div>
          <div><p>Lihat Event</p></div>
          <div><p>Masuk</p></div>
          <div><p>FAQ</p></div>
          <div><p>Syarat dan Ketentuan</p></div>
        </div>
      </div>
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Rayakan di Lalavent</h5>
        </div>
        <div class="content-footer env-desc">
          <div><p>Cara Mempersiapkan Event</p></div>
          <div><p>Cara Mempublikasikan Event</p></div>
          <div><p>Cara Mengelola Event</p></div>
          <div><p>Cara Membuat Event Agar Sukses</p></div>
          <div><p>Cara Membuat Konsep Event Yang Menarik</p></div>
          <div><p>Cara Membuat Event Lomba</p></div>
        </div>
      </div>
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Inspirasi Event</h5>
        </div>
        <div class="content-footer env-desc">
          <div><p>EDM</p></div>
          <div><p>Festival</p></div>
          <div><p>Konser</p></div>
          <div><p>Seminar & Workshop</p></div>
          <div><p>Teater & Drama</p></div>
          <div><p>Syarat dan Ketentuan</p></div>
        </div>
      </div>
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Lokasi Event</h5>
        </div>
        <div class="content-footer env-desc">
          <div><p>Jakarta</p></div>
          <div><p>Bandung</p></div>
          <div><p>Surabaya</p></div>
          <div><p>Makassar</p></div>
          <div><p>Bali</p></div>
          <div><p>Semua Kota</p></div>
        </div>
      </div>
    </div>
    <div class="footer-footer">
      <div class="socmed-footer">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.container-footer {
  border-top: 3px solid #34495e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  .header-footer{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .body-footer{
      .title-footer{
        padding: 0;
        h5{
          font-size: 18px;
          font-weight: bolder;
          color: white;
          padding: 0 0 20px 0;
        }
      }
      .content-footer{
        p{
          font-size: 13px;
          font-weight: 400;
          color: white;
          margin: 0;
          padding: 0 0 10px 0;
          cursor: pointer;
        }
      }
    }
  }
  .footer-footer{
    display: flex;
    justify-content: center;
    padding: 40px 0 0;
    width: 100%;
    .socmed-footer{
      i{
        padding: 0 30px;
        font-size: 35px;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
