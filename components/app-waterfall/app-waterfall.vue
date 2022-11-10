<template>
	<view class="app-waterfall app--row">
		<view class="app-waterfall-list" v-for="v,k in col" :key="v" :style="{'margin-right':gap}">
			<view class="app-waterfall-item-wrap" v-for="j,i in wlist[k]" :key="j.id" :style="{'margin-bottom':gap}">
				<slot :item="j"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 瀑布流组件
	 */
	
	//使用方法
	// <app-waterfall :list="list">
	// 	<template v-slot:default="{item}">
	// 		<view class="app-waterfall-item app--col">
	// 			<u-text :text="item.name" lines="4"></u-text>
	// 		</view>
	// 	</template>
	// </app-waterfall>
	
	// .app-waterfall-item {
	// 	width: 100%;
	// 	min-height: 200rpx;
	// 	background-color: #333;
	// 	overflow: hidden;
	// 	color: white;
	// 	border-radius: $app--radius;
	// }

	//牛逼plus
	console.warn = () => {}

	export default {
		name: "app-waterfall",
		props: {
			col: {
				type: Number,
				default: 2,
			},
			gap: {
				type: String,
				default: "10rpx",
			},
			list: {
				type: Array,
				default: function() {
					return [];
				}
			}
		},
		data() {
			return {
				wlist: [],
			};
		},
		created() {
			this.change()
		},
		methods: {
			change() {
				let i = 0
				let _list = []
				for (let i = 0; i < this.col; i++) {
					_list.push([])
				}
				this.list.forEach((v, k) => {
					if (i == this.col) {
						i = 0
					}
					_list[i].push(v)
					i++
				})
				this.wlist = _list
			}
		},
		watch: {
			list(newList, oldList) {
				this.change()
			}
		},
	}
</script>

<style lang="scss" scoped>
	.app-waterfall {
		width: 100%;

		.app-waterfall-list {
			flex: 1;
		}

		.app-waterfall-list:last-child {
			margin-right: 0 !important;
		}

	}
</style>
