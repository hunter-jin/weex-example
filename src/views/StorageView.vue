<template>
  <scroller>
    <panel title="Storage" type="primary">
      <div style="flex-direction: row;">
        <input class="text" type="text" placeholder="请输入大名" @input="onInput"/>
        <text class="text">{{status}}</text>
      </div>
      <button class="button" value="setItem" size="large" @click="onSetItem"></button>
      <button class="button" value="getItem" size="large" @click="onGetItem"></button>
      <button class="button" value="remove" size="large" @click="onRemoveItem"></button>
      <button class="button" value="getAll" size="large" @click="onGetAllKeys"></button>
    </panel>
  </scroller>
</template>

<style scoped>
  .text {
    margin-bottom: 10px;
    padding: 20px;
    font-size: 36px;
    height: 80px;
    width: 280px;
    border-style: solid;
    border-width: 1px;
    border-color: #cccccc;
  }

  .button {
    margin-bottom: 10px;
  }
</style>

<script>
  import panel from '../components/panel.vue'
  import button from '../components/button.vue'
  let storage = weex.requireModule('storage')
  let modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        value: '',
        status: ''
      }
    },
    components: {
      panel,
      button
    },
    methods: {
      onInput (event) {
        this.value = event.value
      },
      onSetItem () {
        storage.setItem('name', this.value, event => {
          modal.toast({ message: 'setItem:' + event.result, duration: 0.2 })
        })
      },
      onGetItem () {
        storage.getItem('name', event => {
          this.status = event.data
          modal.toast({ message: 'getItem:' + event.result, duration: 0.2 })
        })
      },
      onRemoveItem () {
        storage.removeItem('name', event => {
          this.status = event.result
          modal.toast({ message: '删除成功！', duration: 0.2 })
        })
      },
      onGetAllKeys () {
        storage.getAllKeys(event => {
          this.status = event.result
          var keys = event.data || []
          modal.toast({ message: keys.join(','), duration: 0.2 })
        })
      }
    }
  }
</script>
