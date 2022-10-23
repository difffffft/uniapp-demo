<template>
	<view class="page-er">
		
		
		<!-- 悬浮的header -->
		<app-header>
			<view class="header app--padding" :slot="'body'+ v" v-for="v in 2" :key="v">
				<text>{{aa}}</text>
			</view>
		</app-header>
		
		
		<view class="page-body">
			1
			<button></button>
			<button></button>
			<button></button>
			<button></button>
			<button></button>
		</view>
		<view class="page-footer">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aa: 'hh'
			}
		},
		created() {
			setTimeout(()=>{
				this.aa = "降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛降低赛"
			},5000)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	button {
		height: 500rpx;
		margin-bottom: 60px;
	}

	.header {
		background-color: white;
	}
</style>
