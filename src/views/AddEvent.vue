<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="photo" class="evn-title text-white">Foto / Poster</label>
          <input type="file" class="form-control-file bg-light p-2 rounded-lg">
        </div>
      </div>
    </div>
    <hr class="border-light">
    <div class="row">
      <div class="col-md-6 text-white">
        <div class="form-group">
          <label for="title" class="evn-title">Nama Event<span class="star">*</span></label>
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label for="date" class="evn-title">Tanggal<span class="star">*</span></label>
          <input type="date" class="form-control" v-model="date">
        </div>
        <div class="row">
          <div class="col">
            <label for="time-start" class="evn-title">Waktu Mulai<span class="star">*</span></label>
            <input type="time" class="form-control" v-model="timeStart">
          </div>
          <div class="col">
            <label for="time-end" class="evn-title">Waktu Selesai</label>
            <input type="time" class="form-control" v-model="timeEnd">
          </div>
        </div>
      </div>
      <div class="col-md-6 text-white">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="category" class="evn-title">Kategori<span class="star">*</span></label>
              <select class="form-control" v-model="selected">
                <option>Kategori</option>
                <option>Kategori</option>
                <option>Kategori</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="type" class="evn-title">Tipe<span class="star">*</span></label>
              <select class="form-control" v-model="selected">
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="location" class="evn-title">Lokasi<span class="star">*</span></label>
          <input type="text" class="form-control" v-model="location">
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="price" class="evn-title">Harga</label>
              <input type="number" class="form-control" v-model="price">
              <p class="mt-2 text-warning">Jika harga tidak dimasukkan maka event ini akan dianggap event gratis</p>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="quota" class="evn-title">Kuota</label>
              <input type="number" class="form-control" v-model="quota">
              <p class="mt-2 text-warning">Jika kuota tidak dimasukkan maka Lalavent tidak bertanggung jawab atas terjadinya overload capacity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-light">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="description" class="evn-title text-white">Deskripsi</label>
          <textarea class="form-control" v-model="description" rows="10"></textarea>
        </div>
      </div>
    </div>
    <div class="mt-5 d-flex flex-row-reverse">
      <Button>Simpan</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'AddEvent',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
label {
  font-size: 1.5rem;
}
.star {
  color: #f1c40f;
}
</style>
