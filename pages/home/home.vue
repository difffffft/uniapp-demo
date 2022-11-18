<template>
	<view class="page page-home">
		<!-- 页面内容 -->
		<view class="page-body">
			<button @click="show=true">显示</button>
		</view>
		
		<view class="">
			<u-popup :show="show" :round="10" @close="close" @open="open">
				<view>
					<button v-for="v in 20">{{v}}</button>
				</view>
			</u-popup>
		</view>
		
	</view>
</template>

<script>
	// import payMixin from '@/mixins/pay.mixin'



	export default {
		// mixins: [payMixin],
		data() {
			return {
				show: false
			}
		},
		async mounted() {
			console.log(this);
			// uni.$u.toast("你的网络出现错误")

			// this.pay({
			// 	order_id: '001',
			// 	fail() {

			// 	}
			// })
		},
		onBackPress() {
			alert('')
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-body {
		// background-color: #fff;
	}
</style>
