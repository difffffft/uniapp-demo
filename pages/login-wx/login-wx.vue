<template>
	<view class="page page-login-wx">
		<view class="page-body app--center app--col">
			<u-button type="primary" open-type="getPhoneNumber" @getphonenumber="wxLogin" text="微信一键登录" shape="circle" size="large"></u-button>
			<u-button :plain="true" text="暂不登录" shape="circle" @click="handleGoBack" size="large"></u-button>
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
			handleGoBack(){
				uni.navigateBack()
			},
			async handleWxLoginSuccess(e) {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-body {
		padding: $app--page-margin * 6;
		::v-deep .u-button {
			margin-bottom: $app--margin;
		}
	}
</style>