<template>
	<view class="page-home">
		<u-button text="哈哈哈"></u-button>
	</view>
</template>

<script>
	import {
		postMenu
	} from '@/api'
	export default {
		data() {
			return {

			};
		},
		computed: {

		},
		async mounted() {
			try {
				await postMenu({
					name: "小明",
					password: "123456"
				})
			} catch (e) {
				//TODO handle the exception
			}
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>

</style>
