<template>
  <div>
    <div class="container">
      <EventName v-bind:event="myEvent"/>
      <PersonalUser v-bind:users="myEvent"/>
      <PaymentInfo v-bind:events="myEvent"/>
    </div>
  </div>
</template>

<script>
import EventName from '../components/Payment/EventName'
import PersonalUser from '../components/Payment/PersonalUser'
import PaymentInfo from '../components/Payment/PaymentInfo'
import axios from 'axios'
export default {
  name: 'Payment',
  components: {
    EventName,
    PersonalUser,
    PaymentInfo
  },
  data () {
    return {
      myEvent: []
    }
  },
  methods: {
    getEvent () {
      axios.get('http://192.168.1.97:5000/api/lalavent/ticket/2')
        .then((res) => {
          this.myEvent = res.data.ticket
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getEvent()
  }
}
</script>

<style>

</style>
