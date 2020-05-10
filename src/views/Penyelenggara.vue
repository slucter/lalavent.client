<template>
    <div>
        <div class="row mt-3 mb-3">
            <div class="col-md-12">
                <OrganizerCard
                :organizerImage="user.image"
                :organizerName="user.name"
                :organizerEvents="organizerEvents.length"
                :organizerDesc="user.description"
                />
            </div>
        </div>

        <div class="row mb-3 evn-secondary" style="border-radius: 30px">
            <div class="col-md-3 px-2 py-2 d-flex justify-content-center align-items-center">
                <img src="../assets/img/thumb/intro_to_software_product_management_logo_060520142353.png" style="box-shadow: 1px 5px 10px 10px rgba(0,0,0,0.3); border-radius: 30px; width:180px; height: 180px;" class="img-fluid img-rounded" alt="thumb">
            </div>
            <div class="col-md-6">
                <div class="card-title evn-title text-light py-3" style="font-size: 25px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ex.</div>
                    <div class="card-text text-warning">Diselenggarakan oleh: Dicoding Event</div>
                </div>
            <div class="col-md-3 d-flex justify-content-start">
                <ul class="list-group w-100 my-2 mx-2">
                        <li class="list-group-item bg-transparent border-0 evn-title text-light">Terbuka Hingga</li>
                        <li class="list-group-item bg-transparent border-0 text-light">May 14, 2020</li>
                        <li class="list-group-item bg-transparent border-0 evn-title text-light">Sisa Kuota</li>
                        <li class="list-group-item bg-transparent border-0 text-light">250 Peserta</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import OrganizerCard from '@/components/OrganizerCard'

export default {
  components: {
    OrganizerCard
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('event', ['organizerEvents'])
  }
}
</script>

<style scoped>

</style>
