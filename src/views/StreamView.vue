<template>
  <scroller>
    <panel title="get" type="primary">
      <button type="success" size="middle" value="get" @click="onGet"></button>
      <text>
        {{getResult}}
      </text>
    </panel>
    <panel title="post" type="primary">
      <button type="success" size="middle" value="post" @click="onPost"></button>
      <text>
        {{postResult}}
      </text>
      <text>
        {{postResult1}}
      </text>
    </panel>
  </scroller>
</template>

<style scoped>
  .text {
    margin-bottom: 10px;
    padding: 20px;
    font-size: 36px;
    height: 80px;
    width: 700px;
    border-style: solid;
    border-width: 1px;
    border-color: #cccccc;
  }
</style>

<script>
  import panel from '../components/Panel.vue'
  import button from '../components/Button.vue'
  let stream = weex.requireModule('stream')
  let modal = weex.requireModule('modal')

  var GET_URL = 'http://httpbin.org/get'
  var POST_URL = 'http://httpbin.org/post'
//  var PUT_URL = 'http://httpbin.org/put'
//  var DELETE_URL = 'http://httpbin.org/delete'
//  var HEAD_URL = 'http://httpbin.org/status/418'
//  var PATCH_URL = 'http://httpbin.org/patch'

  export default {
    data () {
      return {
        getResult: '',
        postResult: '',
        postResult1: ''
      }
    },
    methods: {
      onInput (e) {
        this.id = e.value
      },
      onGet () {
        var context = this
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: GET_URL
        }, res => {
          let message = res.ok ? '调用成功' : '调用失败'
          modal.toast({ message: message })
          context.getResult = JSON.stringify(res.ok ? res.data : {})
        })
      },
      onPost () {
        var context = this
        return stream.fetch({
          method: 'POST',
          type: 'json',
          url: POST_URL
        }, res => {
          let message = res.ok ? '调用成功' : '调用失败'
          modal.toast({ message: message })
          context.postResult = JSON.stringify(res.ok ? res.data : {})
        }, response => {
          context.postResult1 = response.length
        })
      }
    },
    components: {
      panel,
      button
    }
  }
</script>
