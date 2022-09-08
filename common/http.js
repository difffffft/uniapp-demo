//全局配置
uni.$u.http.setConfig((config) => {
	config.baseURL = `https://www.xxx.com`
	return config
})

//请求拦截
uni.$u.http.interceptors.request.use((config) => {
	uni.showLoading()
	// if (!token) {
	// 	return Promise.reject({message:'没有token'})
	// }
	config.header = {
		...config.header,
		Token: uni.getStorageSync("token") || 'TokenNull',
		Sign: 'sign',
	}
	return config
}, config => {
	return Promise.reject(config)
})

//响应拦截
uni.$u.http.interceptors.response.use((response) => {
	uni.hideLoading()
	if (response.data.code !== 200)
		return Promise.reject(response)
	if (response.data.code !== '00000')
		return Promise.reject(response)
	return response.data
}, (response) => {
	uni.hideLoading()
	console.log(response)
	return Promise.reject(response)
})

export default uni.$u.http
