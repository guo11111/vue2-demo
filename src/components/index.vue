<template>
  <div class="side-nav">
    <el-row style="height:100%" class="side-nav-elR">
      <el-col :span="4"  style="min-height: 100%; background-color: #545c64;">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
          <!--<el-radio-button :label="false">展开</el-radio-button>-->
          <!--<el-radio-button :label="true">收起</el-radio-button>-->
        <!--</el-radio-group>-->
        <el-menu :default-active="defaultActive" theme="dark" style="min-height: 100%" class="el-menu-vertical-back" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" router background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="index"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">店铺管理</span>
            </template>
            <el-menu-item-group>
              <!--<span slot="title">分组一</span>-->
              <el-menu-item index="busiList">店铺列表</el-menu-item>
              <el-menu-item index="editor">editor</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">组件通信</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="vuex">vuex</el-menu-item>
              <el-menu-item index="comtrans">组件传参</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "sideNav",
  data () {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '');
    }
  },
  mounted () {
    console.log(this.$route.path)
  }
}
</script>

<style>
  .side-nav{
    height: 100%;}
  .el-menu-vertical-back:not(.el-menu--collapse) {
    /*width: 200px;*/
    min-height: 100%;
  }
  .el-menu{
    border-right: none;}
  .el-menu-vertical-back{text-align: left;min-height: 100%;}
  .is-active{background-color: #353131 !important;}
  .el-submenu .el-menu-item {min-width: 50px !important;}
</style>
