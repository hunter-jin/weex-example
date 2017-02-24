<template>
  <scroller>
    <panel title="Instance  API" type="danger">
      <text>{{config}}</text>
    </panel>
  </scroller>
</template>

<style scoped>
</style>

<script>
  import panel from '../components/panel.vue'
  export default {
    data () {
      return {
        config: 'text'
      }
    },
    components: {
      panel
    },
    created () {
      var config = weex.config
      console.log(JSON.stringify(config))
      this.config = JSON.stringify(config)
    }
  }
</script>
