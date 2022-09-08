/**
 *  用法:在组件或页面中使用
	this.$dialog("退出",()=>{
	 
	})
 */
import dialog from '@/util/dialog'
export default {
	install: function(Vue) {
		Vue.prototype.$dialog = dialog
	}
}
