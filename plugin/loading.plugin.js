/**
 * @description:v-loading在任何容器中使用loading
 *  用法:在组件或页面中使用
	this.$dialog("退出",()=>{
	 
	})
 */
const proportion = {
  install: function (Vue) {
    Vue.directive('v-loading', {
      mounted: function (el, binding) {
		  console.log(el);
        // changeSize(el, binding, true)
        // el.__resize = function () {
        //   changeSize(el, binding)
        // }
        // window.addEventListener('resize', el.__resize)
      },
      updated: function (el, binding) {
        // changeSize(el, binding)
      },
      unmounted: function (el) {
        // window.removeEventListener('resize', el.__resize)
      },
    })
  },
}

export default proportion