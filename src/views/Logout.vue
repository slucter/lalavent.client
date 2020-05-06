<script>
export default {
  name: 'Logout',
  created () {
    this.logout()
  },
  methods: {
    logout () {
      localStorage.removeItem('items')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
