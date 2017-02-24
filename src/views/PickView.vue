<template>
  <scroller>
    <panel title="picker" type="primary">
      <button type="primary" value="pickDate" @click="onPickDate"></button>
      <text>
        {{date}}
      </text>
    </panel>
    <panel title="time" type="primary">
      <button type="primary" value="timePick" @click="onPickTime"></button>
      <text>
        {{time}}
      </text>
    </panel>
    <panel title="pick" type="primary">
      <button type="primary" value="pick" @click="onPick"></button>
      <text>
        {{items[idx]}}
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
  let modal = weex.requireModule('modal')
  let picker = weex.requireModule('picker')
  export default {
    data () {
      return {
        items: ['水煮肉', '红烧肉', '口水鸡', '一品豆腐'],
        idx: -1,
        date: '',
        time: '',
        result: ''
      }
    },
    methods: {
      onPickDate () {
        picker.pickDate({
          value: this.date
        }, res => {
          modal.toast({ message: JSON.stringify(res) })
          if (res.result === 'success') {
            this.date = res.data
          }
        })
      },
      onPickTime () {
        picker.pickTime({
          value: this.time
        }, res => {
          modal.toast({ message: JSON.stringify(res) })
          if (res.result === 'success') {
            this.time = res.data
          }
        })
      },
      onPick () {
        picker.pick({
          index: this.idx,
          items: this.items
        }, res => {
          modal.toast({ message: JSON.stringify(res) })
          if (res.result === 'success') {
            this.idx = res.data
          }
        })
      }
    },
    components: {
      panel,
      button
    }
  }
</script>
