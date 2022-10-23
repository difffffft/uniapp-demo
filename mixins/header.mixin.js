/**
 * 获取状态栏高度
 * 获取微信小程序标题栏高度
 * 方便自定义第三方组件
 */
export default {
	data() {
		return {
			//状态栏高度(Number类型)
			headerStatusBarHeightNum: 0,

			//胶囊高度(Number类型)
			headerMenuButtonHeightNum: 0,
			
			//胶囊按钮占用宽度(Number类型)
			headerMenuButtonUseWidthNum: 0,

			//标题栏高度(Number类型)
			headerTitleHeightNum: 40,
			
			//可使用的标题文字占用宽度(Number类型)
			headerTitleUseWidthNum: 173,

			//头部区域默认高度(Number类型)
			headerHeightNum: 0,

			//状态栏高度
			headerStatusBarHeight: '0px',

			//胶囊高度
			headerMenuButtonHeight: '0px',
			
			//胶囊按钮占用宽度
			headerMenuButtonUseWidth: '0px',
			
			//可使用的标题文字占用宽度
			headerTitleUseWidth: '173px',

			//标题栏高度
			headerTitleHeight: '40px',

			//头部区域默认高度
			headerHeight: '0px',
		};
	},
	created() {
		this.headerStatusBarHeightNum    = uni.getSystemInfoSync().statusBarHeight
		this.headerStatusBarHeight       = this.headerStatusBarHeightNum + 'px'
		//#ifdef MP-WEIXIN
		this.headerMenuButtonHeightNum   = uni.getMenuButtonBoundingClientRect().height
		this.headerMenuButtonHeight      = this.headerMenuButtonHeightNum + 'px'
		this.headerTitleHeightNum        = (uni.getMenuButtonBoundingClientRect().top - this.headerStatusBarHeightNum) * 2 + this.headerMenuButtonHeightNum
		this.headerTitleHeight           = this.headerTitleHeightNum + 'px'
		this.headerMenuButtonUseWidthNum = uni.getMenuButtonBoundingClientRect().width + (uni.getSystemInfoSync().windowWidth-uni.getMenuButtonBoundingClientRect().right) * 2
		this.headerMenuButtonUseWidth    = this.headerMenuButtonUseWidthNum + 'px'
		this.headerTitleUseWidthNum      = uni.getSystemInfoSync().windowWidth - (this.headerMenuButtonUseWidthNum * 2)
		this.headerTitleUseWidth         = this.headerTitleUseWidthNum + 'px'
		//#endif
		this.headerHeightNum             = this.headerStatusBarHeightNum + this.headerTitleHeightNum
		this.headerHeight                = this.headerHeightNum + 'px'		
	}
}
