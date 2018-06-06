<template>
  <div class="dataAnaly-box">
    <head-top></head-top>
    <el-button @click="decr">-</el-button>
    {{count}}
    <el-button @click="add">+</el-button>
  </div>
</template>

<script>
import headTop from '../components/head'
export default {
  name: "dataAnaly",
  components: {
    headTop
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      this.$store.commit('increment')
    },
    decr () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
