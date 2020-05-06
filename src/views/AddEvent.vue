<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="photo" class="evn-title text-white">Foto / Poster<span class="star">*</span></label>
          <input type="file" class="form-control-file bg-light p-2 rounded-lg">
        </div>
      </div>
    </div>
    <hr class="border-light">
    <div class="row">
      <div class="col-md-6 text-white">
        <div class="form-group">
          <label for="title" class="evn-title">Nama Event<span class="star">*</span></label>
          <input type="text" :class="$v.title.$error ? 'form-control is-invalid' : 'form-control'" v-model="title">
          <p v-if="$v.title.$error" class="invalid-feedback">Nama event harus diisi!</p>
        </div>
        <div class="form-group">
          <label for="date" class="evn-title">Tanggal<span class="star">*</span></label>
          <input type="date" :class="$v.date.$error ? 'form-control is-invalid' : 'form-control'" v-model="date">
          <p v-if="$v.date.$error" class="invalid-feedback">Tanggal event harus diisi!</p>
        </div>
        <div class="row">
          <div class="col">
            <label for="time-start" class="evn-title">Waktu Mulai<span class="star">*</span></label>
            <input type="time" :class="$v.timeStart.$error ? 'form-control is-invalid' : 'form-control'" v-model="timeStart">
            <p v-if="$v.timeStart.$error" class="invalid-feedback">Waktu mulai event harus diisi!</p>
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
              <select :class="$v.selected.$error ? 'form-control custom-select is-invalid' : 'form-control custom-select'" v-model="selected">
                <option>Kategori</option>
                <option>Kategori</option>
                <option>Kategori</option>
              </select>
              <p v-if="$v.selected.$error" class="invalid-feedback">Kategori event harus diisi!</p>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="type" class="evn-title">Tipe<span class="star">*</span></label>
              <select :class="$v.selected.$error ? 'form-control custom-select is-invalid' : 'form-control custom-select'" v-model="selected">
                <option>Online</option>
                <option>Offline</option>
              </select>
              <p v-if="$v.selected.$error" class="invalid-feedback">Tipe event harus diisi!</p>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="location" class="evn-title">Lokasi<span class="star">*</span></label>
          <input type="text" :class="$v.location.$error ? 'form-control is-invalid' : 'form-control'" v-model="location">
          <p v-if="$v.location.$error" class="invalid-feedback">Lokasi event harus diisi!</p>
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
          <label for="description" class="evn-title text-white">Deskripsi<span class="star">*</span></label>
          <textarea :class="$v.description.$error ? 'form-control is-invalid' : 'form-control'" v-model="description" rows="10"></textarea>
          <p v-if="$v.description.$error" class="invalid-feedback">Deskripsi event harus diisi!</p>
        </div>
      </div>
    </div>
    <div class="mt-5 d-flex flex-row-reverse">
      <Button @btn-click="submitEvent">Simpan</Button>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

import Button from '@/components/Button'

export default {
  name: 'AddEvent',
  data () {
    return {
      title: '',
      date: '',
      timeStart: '',
      timeEnd: '',
      selected: '',
      location: '',
      price: '',
      quota: '',
      description: '',
      submitStatus: false
    }
  },
  validations: {
    title: { required },
    date: { required },
    timeStart: { required },
    selected: { required },
    location: { required },
    description: { required }
  },
  components: {
    Button
  },
  methods: {
    submitEvent () {
      this.submitStatus = true
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        // eslint-disable-next-line no-useless-return
        return
      } else {
        console.log('Submit ok')
      }
    }
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
.is-invalid {
  border-color: red !important;
}
.invalid-feedback {
  color: red;
}
</style>
