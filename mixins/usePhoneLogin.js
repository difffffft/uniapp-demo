/**
 * 微信小程序中使用手机号登录
 */
const usePhoneLogin = {
	data() {
		return {
			//私有属性
			__usePhoneLogin__code__: '',
			
			//公有属性
			usePhoneLoginLoading: false
		};
	},
	onLoad: function(args) {
		this.__usePhoneLogin__login__()
	},
	methods: {
		__usePhoneLogin__getUserInfo__(args) {
			this.usePhoneLoginLoading = true
			uni.getUserInfo({
				provider: 'weixin',
				success: ({
					userInfo
				}) => {
					let obj = {
						...userInfo,
						iv: args.detail.iv,
						encryptedData: args.detail.encryptedData,
						code: this.__usePhoneLogin__code__
					};
					if (this.handleUsePhoneLoginSuccess && (typeof this.handleUsePhoneLoginSuccess ==
							"function")) {
						this.handleUsePhoneLoginSuccess(obj)
						this.usePhoneLoginLoading = false
					} else {
						this.usePhoneLoginLoading = false
					}
				},
				fail: () => {
					this.usePhoneLoginLoading = false
					uni.$u.toast('头像昵称获取失败');
				}
			});
		},
		__usePhoneLogin__login__() {
			uni.login({
				provider: 'weixin',
				success: ({
					code
				}) => {
					this.__usePhoneLogin__code__ = code
				},
				fail: err => {
					uni.$u.toast('uni.login error');
				}
			});
		},
		usePhoneLogin(e) {
			// 检查登录态是否过期
			uni.checkSession({
				success: res => {
					this.__usePhoneLogin__getUserInfo__(e)
				},
				fail: err => {
					this.__usePhoneLogin__login__()
				}
			})
		}
	}
}

export default usePhoneLogin;
