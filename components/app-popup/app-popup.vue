<template>
	<view class="app-popup" v-if="show" @touchmove.stop.prevent="" @click.stop="handleClosePopup">
		<scroll-view class="app-popup-wrap"
			:style="{'max-height': wrapMaxHeight,'bottom':wrapShow ? -wrapHeight + 'px' : '0px' }" scroll-y
			@click.stop="()=>{}" :class="wrapShow?'app-popup-wrap-show':'app-popup-wrap-close'">
			<slot />
		</scroll-view>
	</view>
</template>

<script>
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
		background-color: rgba(0, 0, 0, 0.4);
	}

	.app-popup-wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: $app--item-bg-color;
		border-radius: $app--radius $app--radius 0 0;
		animation-timing-function: ease;
		animation-duration: .35s;
		animation-fill-mode: forwards;
	}

	.app-popup-wrap-show {
		animation-name: enter;
	}

	.app-popup-wrap-close {
		animation-name: leave;
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
