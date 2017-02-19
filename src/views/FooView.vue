<template>
  <div>
    <navbar title="Foo" leftItemTitle="返回" v-on:naviBarLeftItemClick="back"></navbar>
    <div class="wrapper" @click="update">
      <image :src="logoUrl" class="logo"></image>
      <text class="title">Hello {{target}}</text>
    </div>
  </div>
</template>

<style scoped>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
  import navbar from '../components/NavBar.vue'
  export default {
    data () {
      return {
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
        target: 'World'
      }
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    },
    components: {
      navbar
    }
  }
</script>
