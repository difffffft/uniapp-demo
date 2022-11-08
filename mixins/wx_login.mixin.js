/**
 * 微信小程序一键登录
 * 可获取用户昵称/头像/电话等基本信息
 */
export default {
	data() {
		return {
			_wxLoginCode: '',
		};
	},
	onLoad: function(args) {
		this._wxLoginGuest()
	},
	methods: {
		/**
		 * 获取微信用户的基本信息
		 */
		_wxLoginGetUserProfile() {
			uni.getUserProfile({
				desc: "获取您的昵称、头像、地区和性别",
				success: (e) => {
					this._wxLoginCheck(() => {
						if (this.handleWxLoginSuccess && (typeof this.handleWxLoginSuccess ==
								"function")) {
							e["code"] = this._wxLoginCode
							this.handleWxLoginSuccess(e)
						}
					})
				},
				fail: (err) => {
					console.log("用户拒绝登录");
				}
			});
		},

		/**
		 * 每个微信账号对应的微信小程序，都有对应的code
		 */
		_wxLoginGuest(successCallBack) {
			uni.login({
				provider: 'weixin',
				success: ({
					code
				}) => {
					this._wxLoginCode = code
					if (successCallBack) {
						successCallBack()
					}
				},
				fail: err => {
					uni.$u.toast('uni.login error');
				}
			});
		},

		/**
		 * 检查是否登录
		 */
		_wxLoginCheck(successCallBack) {
			uni.checkSession({
				success: res => {
					if (successCallBack) {
						successCallBack()
					}
				},
				fail: err => {
					this._wxLoginGuest(successCallBack)
				}
			})
		},

		/**
		 *暴露给用户使用的方法
		 */
		wxLogin() {
			if (uni.getUserProfile) {
				this._wxLoginGetUserProfile()
			} else {
				uni.$u.toast("你的微信版本太低,请更新后再试")
			}
		}
	}
}
