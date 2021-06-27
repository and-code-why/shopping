import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast';
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //事件总线
Vue.use(toast); //自定义封装的消息弹窗插件
Vue.use(VueLazyload, { //图片的懒加载插件
    loading: require('./assets/img/common/load.gif') //占位符,图片未加载好时,显示添加的图片,更多的属性见vue-lazyload的文档
});

//解决移动端300ms延迟的问题，移动端测试时感受更为明显 插件：fastclick
FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')