import Vue from 'vue'
import App from './App.vue'


// 创建一个事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
