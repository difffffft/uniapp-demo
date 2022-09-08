export default (title, func) => {
	uni.showModal({
		title: `${title}提示`,
		content: `确定${title}吗?`,
		confirmColor: '#F00',
		success: res => {
			if (res.confirm) {
				if (func && (typeof func === "function")) {
					func()
				}
			}
		}
	});
}
