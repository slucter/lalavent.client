<template>
  <button @click="$emit('btn-click')" class="evn-desc evn-btn evn-shadow btn-custom" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: [
    'type'
  ]
}
</script>

<style lang="scss" scoped>
.btn-custom {
  padding: 5px 20px;
  border-radius: 25px;
}
</style>
