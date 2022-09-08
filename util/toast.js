export default {
	none: (title) => {
		uni.showToast({
			title,
			icon: 'none',
			duration: 2000
		});
	},
	success: (title) => {
		uni.showToast({
			title,
			icon: 'success',
			duration: 2000
		});
	},
	error: (title) => {
		uni.showToast({
			title,
			icon: 'error',
			duration: 2000
		});
	}
}
