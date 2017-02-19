export default {
  methods: {
    jump (to) {
      if (this.$router) {
        console.log(`router push to ${to}`)
        this.$router.push(to)
      }
    },
    back () {
      if (this.$router) {
        console.log('router pop')
        this.$router.back()
      }
    }
  }
}
