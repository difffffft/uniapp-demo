/**
 * 支付
 * 支持平台:微信支付/支付宝支付
 * 支持方式:小程序/h5
 */
const wx = require('@/libs/jweixin-module')

export default {
	data() {
		return {
			_payArgs: {},
		};
	},
	methods: {
		
		_payCheckBrowser(){
			let ua = navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				return '微信浏览器'
			} else {
				return '普通浏览器'
			}
		},

		/**
		 * 微信h5支付
		 */
		_payWxH5() {
			//发起请求
			let ua = navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				return '微信浏览器'
			} else {
				return '普通浏览器'
			}

			//返回数据
			wx.config({
				debug: false,
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
					signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					paySign: res.paySign,
					success(res) {
						console.log('success:' + JSON.stringify(res));

						//用定时器查询是否为已完成状态（限制执行次数为5次）
						// var repeat = 5;
						// that.timer = setInterval(function() {
						// 	if (repeat <= 0) {
						// 		clearInterval(timer);
						// 	} else {
						// 		repeat--;
						// 		that.QueryPayResult() //获取到支付状态
						// 	}
						// }, 1000);
					},
					fail(err) {
						this._payError("支付异常")
					}
				})
			})

			console.log("微信h5支付");
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
			this._payChoosePlatform()
		}
	}
}
