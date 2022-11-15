/**
 * 支付
 * 支持平台:微信支付/支付宝支付
 * 支持方式:小程序/h5
 */
const wx = require('@/libs/jweixin-module')
import { reqPostTestV2 } from '@/api'

export default {
	data() {
		return {
			_payArgs: {},
			_payPlatform: ''
		};
	},
	methods: {

		/**
		 * 初始化一些参数
		 */
		_payInit() {
			let platform = ''
			let _platform = uni.getSystemInfoSync().platform
			switch (_platform) {
				case 'android':
					platform = 'Android'
					break;
				case 'ios':
					platform = 'iOS'
					break;
				default:
					platform = 'Wap'
					break;
			}
			this._payPlatform = platform
		},

		async _payTest() {
			const res = await reqPostTestV2()
		},



		/**
		 * 使用微信自带的浏览器进行支付操作
		 */
		_payWxH5WxBrowser() {
			this._payTest()
			return

			wx.config({
				debug: true,
				appId: res.appId,
				timestamp: res.timeStamp,
				nonceStr: res.nonceStr,
				signature: res.paySign,
				jsApiList: ['chooseWXPay']
			});

			wx.ready(() => {
				wx.chooseWXPay({
					timestamp: res.timeStamp,
					nonceStr: res.nonceStr,
					package: res.package,
					signType: 'MD5',
					paySign: res.paySign,
					success: (res) => {

					},
					fail: (err) => {
						this._payError("支付异常")
					}
				})
			})
		},


		/**
		 * 预支付，拿到相应的参数，用来调起支付
		 */
		async _payWxH5NormalBrowserPrepayment() {
			// const res = await reqPostTestV2()
			console.log(this._payArgs.order_id);
		},
		/**
		 * 使用第三方浏览器进行支付操作
		 */
		_payWxH5NormalBrowser() {
			// this._payTest()
			this._payWxH5NormalBrowserPrepayment()
		},


		/**
		 * 支付宝h5使用第三方浏览器进行支付操作
		 */
		_payAlipayH5NormalBrowser() {
			console.log('支付宝支付');
		},

		/**
		 * 检查浏览器环境
		 */
		_payCheckBrowser() {
			let ua = navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				return 'wx_browser'
			} else {
				return 'normal_browser'
			}
		},

		/**
		 * 微信h5支付
		 */
		_payWxH5() {
			//发起请求
			if (this._payCheckBrowser() === 'wx_browser') {
				this._payWxH5WxBrowser()
				return
			}
			if (this._payCheckBrowser() === 'normal_browser') {
				this._payWxH5NormalBrowser()
				return
			}
		},


		/**
		 * 支付宝h5支付
		 */
		_payAlipayH5() {
			//发起请求
			if (this._payCheckBrowser() === 'wx_browser') {
				alert("请使用浏览器打开");
				return
			}
			if (this._payCheckBrowser() === 'normal_browser') {
				this._payAlipayH5NormalBrowser()
				return
			}
		},

		/**
		 * 微信小程序支付
		 */
		_payWxMiniProgram() {
			console.log("微信小程序支付");
		},

		/**
		 * 支付过程中出现异常，或者用户取消了某种操作，导致支付失败
		 */
		_payError(message) {
			this._payArgs && this._payArgs.fail && typeof this._payArgs.fail === "function" && fail(message)
		},

		/**
		 * 选择平台
		 */
		_payChoosePlatform() {
			let itemList = []

			// #ifdef H5
			itemList = ['微信支付', '支付宝支付']
			// #endif

			// #ifdef MP-WEIXIN
			itemList = ['微信支付']
			// #endif

			// #ifdef MP-ALIPAY
			itemList = ['支付宝支付']
			// #endif

			uni.showActionSheet({
				itemList,
				success: (res) => {
					if (itemList[res.tapIndex] === '微信支付') {
						// #ifdef H5
						this._payWxH5()
						// #endif

						// #ifdef MP-WEIXIN
						this._payWxMiniProgram()
						// #endif
					}
					if (itemList[res.tapIndex] === '支付宝支付') {
						// #ifdef H5
						this._payAlipayH5()
						// #endif
						return
					}
				},
				fail: (err) => {
					this._payError("取消支付")
				}
			});
		},

		/**
		 *暴露给用户使用的方法
		 */
		pay(args) {
			this._payArgs = uni.$u.deepClone(args)
			this._payInit()
			this._payChoosePlatform()
		}
	}
}
