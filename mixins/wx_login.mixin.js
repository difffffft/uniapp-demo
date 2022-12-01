/**
 * 微信小程序中使用手机号登录
 * 使用方法
 import wxLogin from "@/mixins/wx_login.mixin"
 mixins: [wxLogin],
 
 <u-button type="primary" open-type="getPhoneNumber" @getphonenumber="wxLogin" text="微信一键登录" shape="circle" size="large"></u-button>
 
async handleWxLoginSuccess(e) {
	await this.$store.dispatch("USER_LOGIN",e)
}
 */
export default {
	data() {
		return {
			//私有属性
			_wxLoginCode: '',
		};
	},
	onLoad: function(args) {
		this._wxLoginGuest()
	},
	methods: {
		/**
		 * 获取code
		 */
		_wxLoginGuest() {
			uni.login({
				provider: 'weixin',
				success: ({
					code
				}) => {
					this._wxLoginCode = code
				},
				fail: err => {
					uni.$u.toast('uni.login error');
				}
			});
		},
		/**
		 * 检查登录态是否过期
		 */
		_wxLoginCheckSession(e) {
			uni.checkSession({
				success: res => {
					if (this.handleWxLoginSuccess && (typeof this.handleWxLoginSuccess ==
							"function")) {
						this.handleWxLoginSuccess({
							iv: e.detail.iv,
							encryptedData: e.detail.encryptedData,
							code: this._wxLoginCode
						})
					}
				},
				fail: err => {
					this._wxLoginGuest()
				}
			})
		},
		wxLogin(e) {
			//无权限
			if (e.detail.errMsg === 'getPhoneNumber:fail no permission') {
				uni.$u.toast('此小程序无登录权限');
				return;
			}
			//用户拒绝授权
			if (e.detail.errMsg === 'getPhoneNumber:fail user deny') {
				uni.$u.toast('用户已拒绝,无法登录');
				return;
			}
			//用户确认授权
			if (e.detail.errMsg === 'getPhoneNumber:ok') {
				this._wxLoginCheckSession(e);
				return;
			}
		}
	}
}