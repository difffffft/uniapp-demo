<template>
	<view class="app-hover-menu-bg" @touchmove.stop="()=>{}" :class="show?'app-hover-menu-show':'app-hover-menu-noshow'"
		@click.stop="handleHideMenuClick">
		<view class="app-hover-menu" :style="{top,left}">
			<view class="menu-list-wrap">
				<view class="iconfont icon-indicate">
				</view>
				<view class="">
					<view class="menu" @click.stop="handleClick(v.id)" v-for="v,k in list" :key="v.id">
						<text>{{v.title}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 使用方法
	 * 
	 select传入的class
	 show
	 <app-hover-menu select=".iconfont-wrap" :show.sync="show" @click="show=false"></app-hover-menu>
	 */
	export default {
		name: "app-hover-menu",
		
		props: {
			select: {
				type: String,
				default: ""
			},
			show: {
				type: Boolean,
				default: false
			},
			list: {
				type: Array,
				default: () => {
					return [{
							id: 0,
							title: '发起群聊',
						},
						{
							id: 1,
							title: '添加朋友',
						},
						{
							id: 2,
							title: '扫一扫',
						},
						{
							id: 3,
							title: '收付款',
						},

					]
				}
			},

		},
		data() {
			return {
				top: "0px",
				left: "0px"
			};
		},
		created() {
			uni.createSelectorQuery()
				.in(this.$parent)
				.select(this.select)
				.boundingClientRect(res => {
					this.top = res.top + (res.height) + "px"
					this.left = res.left + "px"
				})
				.exec();
		},
		methods: {
			handleHideMenuClick() {
				this.$emit('update:show', false);
			},
			handleClick(id) {
				this.$emit("click", id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-hover-menu-bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
		// background-color: rgba(0, 0, 0, 0.5);
	}

	.app-hover-menu-show {
		visibility: visible;
	}

	.app-hover-menu-noshow {
		visibility: hidden;
	}



	.app-hover-menu {
		min-width: 280rpx;
		position: absolute;
		// top: 88rpx + 4rpx;
		// top: 0;
		// left: 0;
		background-color: #333;
		border-radius: $app--radius;
		color: $app--item-bg-color;
		z-index: 10;
		box-shadow: 20rpx 20rpx 40rpx rgba(0, 0, 0, 0.08);

		.menu-list-wrap {
			position: relative;

			.icon-indicate {
				width: 36rpx;
				height: 15rpx;
				position: absolute;
				top: 0;
				font-size: 21rpx;
				left: 44rpx;
				transform: translate(-50%, -15rpx);
				color: #333;
			}

			.menu {
				padding: $app--margin * 1.618 $app--page-margin;
				display: flex;
				align-items: center;
				border-bottom: 1px solid rgba(255, 255, 255, 0.08);
				overflow: hidden;

				text {
					font-size: 30rpx;
				}
			}

			.menu:active {
				background-color: darken($color: #333333, $amount: 8%);
			}

			.menu:first-child:active {
				border-top-left-radius: $app--radius;
				border-top-right-radius: $app--radius;
			}

			.menu:last-child:active {
				border-bottom-left-radius: $app--radius;
				border-bottom-right-radius: $app--radius;
			}

		}
	}
</style>
