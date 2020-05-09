<template>
    <div class="card evn-secondary my-2 mx-2">
            <img src="../../assets/img/banner/1577782470_soEXf3.jpg" style="height: 200px; object-fit: cover; " class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title mb-5 text-light evn-title">{{ eventTitle }}</h5>
            <div class="cat-grup mb-4 d-flex justify-content-between">
                <h6 class="card-subtitle text-warning">{{ eventCategory }}</h6>
                <h6 class="card-subtitle text-disable">{{ eventStatus }}</h6>
            </div>
            <p class="card-text text-light evn-desc">
                <i class="fas fa-campground mr-2"></i>
                {{ eventOrganizer }}
            </p>
            <p class="card-text text-light evn-desc">
                <i class="far fa-calendar-alt mr-3"></i>
                {{ eventDate }}
            </p>
            <p class="card-text text-light evn-desc">
                <i class="far fa-clock mr-3"></i>
                {{ eventStart }} - {{ eventEnd }}
            </p>
            <p class="card-text text-light evn-desc">
                <i class="fas fa-map-marker-alt mr-3"></i>
                {{ eventLocation }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardEvent',
  props: [
    'eventImage',
    'eventTitle',
    'eventCategory',
    'eventDate',
    'eventStart',
    'eventEnd',
    'eventLocation',
    'eventOrganizer',
    'eventStatus'
  ]
}
</script>

<style scoped>

.card{
    width: 250px;
}
</style>
