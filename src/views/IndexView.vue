<template>
  <list>
    <cell v-for="item in items" append="tree">
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
          {url: '/text', title: 'Text'}
        ]
      }
    },
    components: {
      listItem
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #ededed;
  }

  .item-txt {
    font-size: 48px;
    color: #555;
  }
</style>
