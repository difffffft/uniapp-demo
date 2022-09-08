/**
 *  用法:在组件或页面中使用
	this.$toast.none("一般")
	this.$toast.success("正确")
	this.$toast.error("错误")
 */
import toast from '@/util/toast'
export default {
	install: function(Vue) {
		Vue.prototype.$toast = toast
	}
}
