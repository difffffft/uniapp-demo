<template>
	<view class="page page-home">
		<!-- 页面内容 -->
		<view class="page-body">
			<button @click="handleShow">显示</button>
			<button> 底部弹出 Popup</button>
			<button> 底部弹出 Popup</button>
			<button> 底部弹出 Popup</button>
			<button> 底部弹出 Popup</button>
			<button> 底部弹出 Popup</button>
			<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button><button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
		</view>

		<app-popup v-model="show">
			<view class="app--padding">
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
				<button> 底部弹出 Popup</button>
		
			</view>
		</app-popup>
	</view>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		data() {
			return {
				show: false
			}
		},
		computed: {
			...mapState({
				login: state => state.user.login,
			})
		},
		async mounted() {
			// setInterval(() => {
			// 	console.log(this.show);
			// }, 500)
		},
		onBackPress() {
			uni.$u.toast('返回')
		},
		methods: {
			handleShow() {
				this.show = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-body {
		// background-color: #fff;
	}
</style>
