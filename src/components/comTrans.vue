<template>
  <div class="comTrans-box">
    <head-top></head-top>
    <child-com @ups="change" :child-msg="childMsg"></child-com>
    <div class="">{{msg}}</div>
  </div>
</template>

<script>
import headTop from '../components/head'
import childCom from '../components/childCom'
export default {
  name: "comTrans",
  data () {
    return {
      msg: '',
      childMsg: ['父组件传给子组件的数据', '父组件传给子组件的数据']
    }
  },
  components: {
    headTop,
    childCom
  },
  methods: {
    change (msg) {
      this.msg = msg
    }
  }
}
</script>

<style scoped>

</style>
