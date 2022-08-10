import App from './App'
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'

import uView from 'uview-ui'
Vue.use(uView)

import useStyleShared from '@/mixins/useStyleShared'
Vue.mixin(useStyleShared)

import store from '@/store'
Vue.prototype.$store = store

import toast from '@/util/toast'
Vue.prototype.$toast = toast

const app = new Vue({
    ...App
})
app.$mount()