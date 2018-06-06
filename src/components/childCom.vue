<template>
  <div class="childCom">
    <el-button @click="up">子组件向父组件传参</el-button>
    <ul class="">
      <li v-for="(item, index) in childMsg" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "childCom",
  data () {
    return {

    }
  },
  props: {
    childMsg: Array
  },
  methods: {
    up () {
      this.$emit('ups', '子组件数据') // 主动触发ups方法，'快'为向父组件传递的数据
    }
  }
}
</script>

<style scoped>

</style>
