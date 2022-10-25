<template>
	<view class="page">
		<app-header></app-header>
		<view class="page-body">
			<app-loading :loading="loading">
				<text>mmp</text>
			</app-loading>
		</view>
		<view class="page-footer">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true
			}
		},
		created() {
			setTimeout(() => {
				this.loading = false
			}, 3000)
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
</style>
