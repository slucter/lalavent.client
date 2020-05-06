<template>
  <button @click.prevent="$emit('btn-click')" class="evn-desc evn-btn evn-shadow btn-custom">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
.btn-custom {
  padding: 5px 20px;
  border-radius: 25px;
}
</style>
