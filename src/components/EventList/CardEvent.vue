<template>
    <div class="card evn-secondary my-2 mx-2">
            <img :src="eventImage" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title mb-5 text-light evn-title">{{ eventTitle }}</h5>
            <h6 class="card-subtitle mb-2 text-warning mb-4">{{ eventCategory }}</h6>
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
    'eventLocation'
  ]
}
</script>

<style scoped>

.card{
    width: 250px;
}
</style>
