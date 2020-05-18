import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from './store/index'
import toast from 'components/common/toast/index'


// 安装toast插件
Vue.use(toast)

// 创建一个事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
