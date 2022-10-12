<template>
	<view class="page-home">
		<u-button :loading="usePhoneLoginLoading" text="jiaz"></u-button>
		<button open-type="getPhoneNumber" hover-class="none" @getphonenumber="handleLogin">{{ '点击登录' }}</button>
		
		<u-text mode="price" text="3214" size="50rpx"></u-text>
	</view>
</template>

<script>
	import {
		postMenu
	} from '@/api'
	import usePhoneLogin from '@/mixins/usePhoneLogin'

	export default {
		mixins: [usePhoneLogin],
		data() {
			return {
				loading: false
			};
		},
		computed: {

		},
		async mounted() {
			// console.log(this.usePhoneLoginLoading);
			// this.__usePhoneLogin__loading__ = true
			
			// this.loading = true
			// try {
			// 	await postMenu({
			// 		name: "小明",
			// 		password: "123456"
			// 	})
			// } catch (e) {
			// 	console.log("error",e);
			// 	//TODO handle the exception
			// }
		},
		methods: {
			handleUsePhoneLoginSuccess(o) {
				console.log(o);
				// console.log(this.__usePhoneLogin__loading__);
			},
			handleLogin(e) {
				//无权限
				if (e.detail.errMsg === 'getPhoneNumber:fail no permission') {
					uni.$u.toast('无登录权限');
					return;
				}
				//拒绝
				if (e.detail.errMsg === 'getPhoneNumber:fail user deny') {
					uni.$u.toast('用户已拒绝,无法登录');
					return;
				}
				//登录
				if (e.detail.errMsg === 'getPhoneNumber:ok') {
					this.usePhoneLogin(e)
					return;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
