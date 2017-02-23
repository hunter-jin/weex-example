<template>
  <panel title="Slider" type="primary">
    <slider class="wrapper" :autoPlay="true">
      <image v-for="item in items" :src="item.img" :href="item.url" @click="onclick"></image>
      <indicator class="indicator"></indicator>
    </slider>
  </panel>
</template>

<style scoped>
  .wrapper {
    width: 700px;
    height: 300px;
  }

  .indicator {
    width: 700px;
    height: 300px;
    item-color: #fff;
    item-selected-color: #eded00;
    item-size: 30px;
    top: 100px;
  }
</style>

<script>
  import panel from '../components/Panel.vue'
  import utils from '../common/js/Utils'
  let modal = weex.requireModule('modal')
  let navigator = weex.requireModule('navigator')

  export default {
    data () {
      return {
        items: [
          {title: '海景别墅1', img: utils.getUrl('image/p1.jpg'), url: '/list'},
          {title: '海景别墅2', img: utils.getUrl('image/p2.jpg'), url: '/text'},
          {title: '海景别墅3', img: utils.getUrl('image/p3.jpg'), url: 'http://www.sina.com'},
          {title: '海景别墅4', img: utils.getUrl('image/p4.jpg'), url: 'http://www.imooc.com'}
        ]
      }
    },
    components: {
      panel
    },
    methods: {
      onclick (e) {
        let imgUrl = e.target.attr.href
        // 跳转到相应页
        modal.toast({
          message: 'click ~~' + imgUrl + ' !'
        })
      }
    }
  }
</script>
