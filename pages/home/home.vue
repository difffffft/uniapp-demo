<template>
	<view class="page page-home">

		<!-- 页面内容 -->
		<view class="page-body">


		</view>
	</view>
</template>

<script>
	import payMixin from '@/mixins/pay.mixin'
	export default {
		mixins: [payMixin],
		data() {
			return {}
		},
		async mounted() {
			this.pay({
				order_id: '001',
				fail() {

				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.page-body {
		// background-color: #fff;
	}
</style>
