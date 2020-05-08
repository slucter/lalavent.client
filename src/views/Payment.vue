<template>
  <div>
    <div class="container">
      <EventName />
      <PersonalUser />
      <PaymentInfo />
    </div>
  </div>
</template>

<script>
import EventName from '../components/Payment/EventName'
import PersonalUser from '../components/Payment/PersonalUser'
import PaymentInfo from '../components/Payment/PaymentInfo'
export default {
  name: 'Payment',
  components: {
    EventName,
    PersonalUser,
    PaymentInfo
  }
}
</script>

<style>

</style>
