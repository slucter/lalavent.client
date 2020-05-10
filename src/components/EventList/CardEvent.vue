<template>
    <div class="card evn-secondary my-2 mx-2">
            <router-link :to="linkDetail">
            <img :src="eventImage" style="height: 200px; object-fit: cover; " class="card-img-top" alt="...">
            </router-link>
        <div class="card-body">
            <router-link :to="linkDetail" class="card-title mb-5 text-light evn-title" style="font-size: 20px;">{{ eventTitle }}</router-link>
            <div class="cat-grup mb-4 d-flex justify-content-between mt-3">
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
    'eventStatus',
    'linkDetail'
  ]
}
</script>

<style scoped>

.card{
    width: 250px;
}
</style>
