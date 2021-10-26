import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
// 全局配置axios的请求路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把axios挂载到Vue.protoType上，供每个 .vue组件的实例使用
Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
