import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index'
import dataList from '../components/dataList'
import busiList from '../components/busiList'
import ediTe from '../components/edite'
import dataAnaly from '../components/dataAnaly'
import comTrans from '../components/comTrans'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Indexs',
      component: Index,
      children: [{
        path: '',
        name: 'dataList',
        component: dataList
      }, {
        path: '/busiList',
        name: 'busiList',
        component: busiList,
        meta: ['店铺管理', '店铺列表']
      }, {
        path: '/editor',
        name: 'edite',
        component: ediTe,
        meta: ['店铺管理', '文本编辑器']
      }, {
        path: '/vuex',
        name: 'analy',
        component: dataAnaly,
        meta: ['组件通信', 'vuex']
      }, {
        path: '/comtrans',
        name: 'comtran',
        component: comTrans,
        meta: ['组件通信', '传参']
      }]
    }, {
      path: '/as',
      name: 'List',
      component: dataList
    }, {
      path: '/', redirect: '/index'
    }
  ]
})
