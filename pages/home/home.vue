<template>
	<view class="page-home">
		
	</view>
</template>

<script>
	import {
		postMenu
	} from '@/api'
	
	// import variables from '@/style/variables.module.scss'
	// console.log(variables)
	
	
	export default {
		data() {
			return {
				loading:true
			};
		},
		computed: {

		},
		async mounted() {
			// try {
			// 	await postMenu({
			// 		name: "小明",
			// 		password: "123456"
			// 	})
			// } catch (e) {
			// 	//TODO handle the exception
			// }
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>

</style>
