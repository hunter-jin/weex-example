<template>
  <list :loadmoreoffset="0" @loadmore="onloadmore">
    <template v-for="bks in books">
      <!--<cell>-->
      <!--<list-item  style="background-color: #31708f;">-->
      <!--<text style="color: #fff;">{{bks.category}}</text>-->
      <!--</list-item>-->
      <!--</cell>-->
      <cell :index="book.id" v-for="book in bks.items">
        <list-item>
          <text>{{book.title}}</text>
        </list-item>
      </cell>
    </template>
  </list>
</template>

<style scoped>
</style>

<script>
  import listItem from '../components/ListItem.vue'
  var modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        appearMin: 1,
        appearMax: 1,
        appearIds: [],
        books: [{
          category: 'JavaScript开发从书',
          items: [
            {id: 11, title: 'JavaScript编程指南'},
            {id: 12, title: 'JavaScript权威指南'},
            {id: 13, title: 'JavaScript设计模式'},
            {id: 14, title: 'JavaScript从入门到精通'},
            {id: 15, title: 'JavaScript教程'}
          ]
        }, {
          category: 'Swift开发从书',
          items: [
            {id: 21, title: 'Swift编程指南'},
            {id: 22, title: 'Swift权威指南'},
            {id: 23, title: 'Swift设计模式'},
            {id: 24, title: 'Swift从入门到精通'},
            {id: 25, title: 'Swift教程'}
          ]
        }, {
          category: 'C++开发从书',
          items: [
            {id: 31, title: 'C++编程指南'},
            {id: 32, title: 'C++权威指南'},
            {id: 33, title: 'C++设计模式'},
            {id: 34, title: 'C++从入门到精通'},
            {id: 35, title: 'C++教程'}
          ]
        }]
      }
    },
    components: {
      listItem
    },
    methods: {
      onloadmore () {
        modal.toast({
          message: 'loadmore'
        })
      }
    }
  }
</script>
