<template>
  <div :style="{ backgroundColor: bgColor }"
    class="item"
    @click="click"
    @touchstart="touchstart"
    @touchend="touchend">
    <slot></slot>
  </div>
</template>

<style scoped>
  .item {
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 35px;
    padding-right: 35px;
    height: 160px;
    justify-content: center;
    /*margin-bottom: 1px; FUTURE */
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: #dddddd;
  }
</style>

<script>
  export default {
    props: {
      bgColor: { default: '#FFF' }
    },
    data () {
      return {}
    },
    methods: {
      click () {
        this.$emit('click')
      },
      touchstart () {
        console.log('list-item touch start!')
      },
      touchend () {
        console.log('list-item touch end!')
      }
    }
  }
</script>
