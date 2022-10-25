<template>
	<view class="app-loading">
		<view class="app-loading-wrap" v-if="loading">
			<view class="loading" :class="mode"></view>
		</view>
		<slot v-else></slot>
	</view>
</template>

<script>
	export default {
		name: "app-loading",
		props: {
			mode: {
				type: String,
				default: 'loading-1'
			},
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
	.app-loading {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.app-loading-wrap {
		min-height: 120rpx;
		flex: 1;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	$loading-1-width:40rpx;

	.loading-1 {
		width: $loading-1-width * 2 + $loading-1-width / 2;
		min-height: $loading-1-width * 2;
		position: relative;
		perspective: $loading-1-width * 10;
	}

	.loading-1:before,
	.loading-1:after {
		position: absolute;
		bottom: 0;
		width: $loading-1-width;
		height: $loading-1-width;
		content: "";
		animation: jumping 0.5s infinite alternate;
		background: $app--primary-color;
	}

	.loading-1:before {
		left: 0;
	}

	.loading-1:after {
		right: 0;
		animation-delay: 0.15s;
	}

	@keyframes jumping {
		0% {
			transform: scale(1) translateY(0rpx) rotateX(0deg);
			box-shadow: 0 0 0 rgba($color:$app--primary-color, $alpha:0);
		}

		100% {
			transform: scale(1.2) translateY(-$loading-1-width) rotateX(45deg);
			background: $app--primary-color;
			box-shadow: 0 $loading-1-width * 2 $loading-1-width * 2 rgba($color:$app--primary-color, $alpha:0.58);
		}
	}
</style>
