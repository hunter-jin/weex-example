<template>
  <list>
    <cell v-for="item in items">
      <list-item @click="jump(item.url)">
        <text class="item-txt">{{item.title}}</text>
      </list-item>
    </cell>
  </list>
</template>

<script>
  import listItem from '../components/ListItem.vue'

  export default {
    data () {
      return {
        items: [
          {url: '/foo', title: 'Foo'},
          {url: '/text', title: 'Text'},
          {url: '/image', title: 'Image'},
          {url: '/input', title: 'Input'},
          {url: '/scroll', title: 'Scroller'},
          {url: '/list', title: 'List'},
          {url: '/slider', title: 'Slider'}
        ]
      }
    },
    components: {
      listItem
    }
  }
</script>

<style scoped>
  .nav-scroller-wrapper {
    position: fixed;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0px;
  }

  .wrapper {
    background-color: #ededed;
  }

  .item-txt {
    font-size: 48px;
    color: #555;
  }
</style>
