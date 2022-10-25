<template>
	<view class="page page-home">
		<!-- <button open-type="getPhoneNumber" hover-class="none" @getphonenumber="handleLogin">{{ '点击登录' }}</button> -->
	</view>
</template>

<script>
	import {
		postMenu
	} from '@/api'
	import usePhoneLogin from '@/mixins/usePhoneLogin'
	
	
	export default {
		// mixins: [headerMixin],
		data() {
			return {
				loading: false
			};
		},
		computed: {

		},
		created() {
			uni.navigateTo({
				url:'/pages/er/er'
			})
		},
		async mounted() {
			
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
