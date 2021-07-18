import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

import toast from 'components/common/toast'

const app = createApp(App);
app.use(store).use(router).use(toast).mount('#app')
    // 解决移动端 300 ms 延迟
FastClick.attach(document.body)

// 未能解决 bug ： vue-lazyload 的使用