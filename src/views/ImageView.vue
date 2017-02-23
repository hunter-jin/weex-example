<template>
  <div>
    <navbar title="Text Demo" leftItemTitle="返回" v-on:naviBarLeftItemClick="back"></navbar>
    <scroller class="nav-scroller-wrapper">
      <panel title="width x height" type="primary">
        <tip type="warning" value="Weex screen width is 750" style="margin-bottom: 20px;"></tip>
        <div style="flex-direction:row">
          <image class="img" style="width: 300px; height: 300px;" :src="img"></image>
          <image class="img" style="width: 200px; height: 200px;" :src="img"></image>
          <image class="img" style="width: 50px; height: 50px;" :src="img"></image>
        </div>
      </panel>
      <panel title="GIF Animation" type="primary">
        <tip type="warning" value="Depanding on Native ImageSDK" style="margin-bottom: 20px;"></tip>
        <div style="flex-direction:row">
          <image class="img" style="width: 300px; height: 200px;" :src="img1"></image>
        </div>
      </panel>
      <panel title="resize" type="primary">
        <div style="flex-direction:column">
          <image class="img" style="width: 660px; height: 300px;" :src="img" resize="streach"></image>
          <image class="img" style="width: 660px; height: 300px;" :src="img" resize="cover"></image>
          <image class="img" style="width: 660px; height: 300px;" :src="img" resize="contain"></image>
        </div>
      </panel>
    </scroller>
  </div>
</template>

<style scoped>
  .nav-scroller-wrapper {
    position: fixed;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0px;
  }
  .img-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img {
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 1px;
    border-width: 1px;
    border-color: black;
    border-style: solid;
  }
</style>

<script>
  import panel from '../components/Panel.vue'
  import navbar from '../components/NavBar.vue'
  import tip from '../components/Tip.vue'
  export default {
    data () {
      return {
        img: '//192.168.1.100:12580/assets/image/1024.jpg',
        img1: '//192.168.1.100:12580/assets/image/girl.jpg'
      }
    },
    components: {
      panel,
      navbar,
      tip
    }
  }
</script>
