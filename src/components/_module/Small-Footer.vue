<template>
  <div class="container-footer evn-secondary">
    <div class="body-footer">
      <p class="evn-title">Tentang Kami</p>
    </div>
    <div class="body-footer">
      <p class="evn-title">Blog</p>
    </div>
    <div class="body-footer">
      <p class="evn-title">Karir</p>
    </div>
    <div class="body-footer">
      <p class="evn-title">Kebijakan Privasi</p>
    </div>
    <div class="body-footer">
      <p class="evn-title">Hubungi Kami</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Small-Footer'
}
</script>

<style lang="scss" scoped>
.container-footer{
  display: flex;
  justify-content: center;
  .body-footer{
    display: flex;
    justify-content: center;
    padding: 20px 30px;
    p{
      color: white;
      cursor: pointer;
      margin: 0;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
