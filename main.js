import App from './App'
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'

//使用uView第三方插件
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
//使用dialog插件
import dialog from '@/plugin/dialog.plugin'
Vue.use(dialog)
//使用toast插件
import toast from '@/plugin/toast.plugin'
Vue.use(toast)
//修改第三方组件样式必加
import useStyleShared from '@/mixins/useStyleShared'
Vue.mixin(useStyleShared)
//使用VueStore必加
import store from '@/store'
Vue.prototype.$store = store

const app = new Vue({
    ...App
})
app.$mount()