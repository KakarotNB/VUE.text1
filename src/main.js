// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 导入UI组件库
import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
});
