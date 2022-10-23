<template>
	<view class="app-header-wrap">

		<!-- 脱离文档流 -->
		<view class="app-header" :class="fixed?'app-header-fixed':''">
			<view class="app-header-status-bar" :style="{'height':headerStatusBarHeight,'background':statusBarBgColor}">
			</view>
			<view class="app-header-title-bar" :style="{'height':headerTitleHeight,'background':titleBarBgColor}">
				<view v-if="$slots.title">
					<slot name="title"></slot>
				</view>
				<view class="app-header-title-bar-content" :style="{'padding-right':headerMenuButtonUseWidth}" v-else>
					<view class="app-header-back-wrap" :style="{'width':headerTitleHeight,'height':headerTitleHeight}"
						@click="handleRebackClick">
						<view class="iconfont icon-arrow-left app-header-back"></view>
					</view>
					<view class="app-header-title-wrap" :style="{'width':headerTitleUseWidth}">
						<u-text :text="title" lines="1" size="32rpx" align="center" bold></u-text>
					</view>
				</view>
			</view>
			<view class="app-header-body-bar">
				<!-- #ifdef MP-WEIXIN -->
				<slot name="body0"></slot>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<slot name="body1"></slot>
				<!-- #endif -->
			</view>
		</view>

		<!-- 文档流 -->
		<view class="app-header app-header-hidden" v-if="fixed">
			<view class="app-header-status-bar" :style="{'height':headerStatusBarHeight,'background':statusBarBgColor}">
			</view>
			<view class="app-header-title-bar" :style="{'height':headerTitleHeight,'background':titleBarBgColor}">
				<view v-if="$slots.title">
					<slot name="title"></slot>
				</view>
				<view class="app-header-title-bar-content" :style="{'padding-right':headerMenuButtonUseWidth}" v-else>
					<view class="app-header-back-wrap" :style="{'width':headerTitleHeight,'height':headerTitleHeight}"
						@click="handleRebackClick">
						<view class="iconfont icon-arrow-left app-header-back"></view>
					</view>
					<view class="app-header-title-wrap" :style="{'width':headerTitleUseWidth}">
						<u-text :text="title" lines="1" size="32rpx" align="center" bold></u-text>
					</view>
				</view>
			</view>
			<view class="app-header-body-bar">
				<!-- #ifdef MP-WEIXIN -->
				<slot name="body1"></slot>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<slot name="body2"></slot>
				<!-- #endif -->
			</view>
		</view>

	</view>
</template>

<script>
	/**
	 * 为了兼容微信小程序,当需要body插槽时,必须传入
	 * 		:slot="'body'+ v" v-for="v in 2" :key="v"
	 * 
	<app-header>
		<view class="header app--padding" :slot="'body'+ v" v-for="v in 2" :key="v">
			<text>{{v}}</text>
		</view>
	</app-header>
	 */
	import headerMixin from '@/mixins/header.mixin'
	export default {
		mixins: [headerMixin],
		name: "app-header",
		props: {
			// 状态栏背景颜色
			statusBarBgColor: {
				type: String,
				default: "#FFFFFF"
			},
			//标题栏高度
			titleBarBgColor: {
				type: String,
				default: "#FFFFFF"
			},
			//标题文字
			title: {
				type: String,
				default: "标题"
			},
			//是否是悬浮布局
			fixed: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			handleRebackClick() {
				uni.navigateBack()
			}
		}
	}
</script>


<style lang="scss" scoped>
	.app-header {
		width: 100%;
	}

	.app-header-fixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}

	.app-header-hidden {
		position: relative;
		visibility: hidden;
	}

	.app-header-title-bar-content {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		position: relative;

		.app-header-title-wrap {
			height: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			justify-content: center;
			align-items: center;

			::v-deep .u-text {
				vertical-align: middle;
			}
		}
	}

	.app-header-back-wrap {
		display: flex;
		justify-content: center;
		align-items: center;

		.app-header-back {
			font-size: 48rpx;
		}
	}

	.app-header-body-bar {}
</style>
