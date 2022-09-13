<template>
	<view class="app-loading-view">
		<u-loading-icon :customStyle="{width:'100%',height:'100%'}" mode="semicircle" v-if="loading" color="#06f">
		</u-loading-icon>
		<slot v-else></slot>
	</view>
</template>

<script>
	export default {
		name: "app-loading-view",
		props: {
			loading: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.app-loading-view {
		width: 100%;
		height: 100%;
	}
</style>
