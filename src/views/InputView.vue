<template>
  <div>
    <navbar title="Input Demo" leftItemTitle="返回" v-on:naviBarLeftItemClick="back"></navbar>
    <scroller class="nav-scroller-wrapper">
      <panel title="input" type="primary">
        <input class="txt" type="tel" value="1901" maxlength="6" placeholder="请输入登录帐号"
          @input="oninput" @change="onchange"/>
        <input class="txt" type="password" value="" maxlength="6" placeholder="请输入登录密码"
               @input="oninput" @change="onchange"/>
        <text style="margin-bottom: 10px;">input：{{textInput}}</text>
        <text style="margin-bottom: 10px;">change：{{textChange}}</text>
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

  .txt {
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
  import navbar from '../components/NavBar.vue'
  import panel from '../components/Panel.vue'
  let modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        textChange: '',
        textInput: ''
      }
    },
    components: {
      panel,
      navbar
    },
    methods: {
      oninput(event) {
        this.textInput = event.value
        modal.toast({
          message: `input ${event.value}`,
          duration: 2
        })
        console.log(`input ${event.value}`)
      },
      onchange(event) {
        this.textChange = event.value
        console.log(`change ${event.value}`)
        modal.toast({
          message: `change ${event.value}`,
          duration: 2
        })
      }
    }
  }
</script>
