<template>
	<view class="page page-login-wx">
		<view class="page-body app--center">
			<u-button text="微信一键登录" type="primary" @click="handleWxLoginClick" shape="circle"></u-button>
		</view>
	</view>
</template>

<script>
	import wxLogin from "@/mixins/wx_login.mixin"
	export default {
		mixins: [wxLogin],
		data() {
			return {

			};
		},
		methods: {
			handleWxLoginSuccess(e) {
				console.log(e);

				let duration = 1500
				uni.showToast({
					title: "登录成功",
					duration,
					complete() {
						setTimeout(() => {
							uni.navigateBack()
						}, duration)
					}
				})
			},
			handleWxLoginClick() {
				this.wxLogin()
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
