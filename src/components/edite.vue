<template>
  <div class="edite-box">
    <head-top></head-top>

    <vue-editor v-model="htmlForEditor"></vue-editor>
    <el-button @click="saveContent">获取编辑器内容</el-button>
  </div>
</template>

<script>
import headTop from '../components/head'
import { VueEditor } from 'vue2-quill-editor'
export default {
  name: "edite",
  components: {
    headTop,
    VueEditor
  },
  data () {
    return {
      htmlForEditor: '<h3>你好vue-quill-editor</h3>'
    }
  },
  methods: {
    saveContent () {
      alert(this.htmlForEditor)
    }
  }
}
</script>

<style>
  .quillWrapper{margin: 10px;}
  .ql-toolbar{text-align: left;}
</style>
