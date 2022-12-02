<template>
	<view class="app-popup" v-if="show" @touchmove.stop.prevent="" @click.stop="handleClosePopup"
		:class="wrapShow?'app-popup-show':'app-popup-close'">

		<!-- 自定义的弹窗 -->
		<scroll-view class="app-popup-wrap" v-if="mode==='custom'"
			:style="{'max-height': wrapMaxHeight,'bottom':wrapShow ? -wrapHeight + 'px' : '0px' }" scroll-y
			@click.stop="()=>{}" :class="wrapShow?'app-popup-wrap-show':'app-popup-wrap-close'">
			<slot />
			<u-safe-bottom v-if="safeAreaInsetBottom"></u-safe-bottom>
		</scroll-view>

		<!-- 基础的对话框 -->
		<view class="app-popup-wrap" v-if="mode==='confirm'"
			:style="{'max-height': wrapMaxHeight,'bottom':wrapShow ? -wrapHeight + 'px' : '0px' }" @click.stop="()=>{}"
			:class="wrapShow?'app-popup-wrap-show':'app-popup-wrap-confirm-close'">
			<view class="app-popup-wrap-title">
				<u-text :text="title" align="center" size="32rpx" bold color="#191919" lines="1"></u-text>
			</view>
			<scroll-view scroll-y class="app-popup-confirm-slot">
				<slot />
			</scroll-view>
			<view class="app-popup-wrap-operation app--row">
				<button @click="handleClosePopup">取消</button>
				<button :type="type" @click.stop="$emit('confirm')">{{confirmText}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 
	 * 使用方法:
	 * 
			自定义
			<app-popup v-model="show">
				我是弹出的内容
			</app-popup>
		
		
			对话框
			<app-popup v-model="show" type="success" mode="confirm" title="退出群聊?" @confirm="show=false">
			</app-popup>
	 */
	export default {
		name: "app-popup",
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				type: Boolean,
				default: false
			},
			mode: {
				/**
				 * [custom,confirm,]
				 */
				type: String,
				default: 'custom'
			},
			title: {
				type: String,
				default: ''
			},
			
			/**
			 * [primary,success,warn]
			 */
			type: {
				type: String,
				default: 'success'
			},

			/**
			 * 不建议超过两个字
			 */
			confirmText: {
				type: String,
				default: '确认'
			},
			
			/**
			 * 适配iphone
			 */
			safeAreaInsetBottom: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				//显示整体
				show: this.value,
				//显示内容
				wrapShow: this.value,
				//显示内容的最大高度
				wrapMaxHeight: uni.getSystemInfoSync().windowHeight * 0.8 + 'px',
				//显示内容的高度
				wrapHeight: '0',
			};
		},
		//监听父亲是否更新
		watch: {
			value: {
				handler(newVal, oldVal) {
					this.show = newVal
					this.wrapShow = newVal
					this.$nextTick(() => {
						uni.createSelectorQuery()
							.in(this)
							.select('.app-popup-wrap')
							.boundingClientRect(data => {
								this.wrapHeight = data.height
							})
							.exec(function(res) {

							});
					})

				},
			},
		},
		methods: {
			handleClosePopup() {
				//1.先关闭内容
				this.wrapShow = false
				//2.在关闭弹窗
				setTimeout(() => {
					this.show = false
					this.$emit('input', this.show)
				}, 350)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	//解决h5滚动穿透
	::v-deep .uni-scroll-view {
		overscroll-behavior-y: contain !important;
	}

	.app-popup-confirm-slot {
		min-height: 160rpx;
		max-height: 300rpx;
	}

	.app-popup-wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: $app--item-bg-color;
		border-radius: $app--radius + 8rpx $app--radius + 8rpx 0 0;
		animation-timing-function: ease;
		animation-duration: .35s;
		animation-fill-mode: forwards;

		.app-popup-wrap-title {
			padding: 98rpx $app--page-margin 0 $app--page-margin;
		}

		.app-popup-wrap-operation {
			padding-bottom: 98rpx;
			justify-content: center;

			button {
				overflow: visible;
				line-height: 1;
				padding: 32rpx 32rpx * 2.6;
				border-radius: 16rpx;
				font-size: 30rpx;
				margin: 0 15rpx;
			}

			button::after {
				border: none;
			}

			button:first-child {
				background-color: #F2F2F2;
			}
		}
	}

	.app-popup-wrap-show {
		animation-name: enter;
	}

	.app-popup-wrap-close {
		animation-name: leave;
	}

	.app-popup-wrap-confirm-close {
		animation-name: leave;
	}


	.app-popup-show {
		animation-name: bg-enter;
		animation-timing-function: ease;
		animation-duration: .35s;
		animation-fill-mode: forwards;
	}

	.app-popup-close {
		animation-name: bg-leave;
		animation-timing-function: ease;
		animation-duration: .35s;
		animation-fill-mode: forwards;
	}

	@keyframes bg-enter {
		from {
			background-color: rgba(0, 0, 0, 0);
		}

		to {
			background-color: rgba(0, 0, 0, 0.4);
		}
	}

	@keyframes bg-leave {
		from {
			background-color: rgba(0, 0, 0, 0.4);
		}

		to {
			background-color: rgba(0, 0, 0, 0);
		}
	}

	@keyframes enter {
		from {
			opacity: 0;
		}

		to {
			bottom: 0;
			opacity: 1;
		}
	}

	@keyframes leave {
		from {
			bottom: 0;
			opacity: 1;
		}

		to {
			bottom: calc(-80%);
			opacity: 0;
		}
	}
</style>
