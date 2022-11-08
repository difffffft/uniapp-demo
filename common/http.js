import {
	BASE_URL
} from "@/config"

import useHttp from '@/uni_modules/uview-ui/libs/luch-request/core/Request'
const http = new useHttp()

//配置
http.setConfig((config) => {
	config.baseURL = BASE_URL
	return config
})

//请求拦截
http.interceptors.request.use((config) => {
	config.header = {
		...config.header,
		Token: uni.getStorageSync("token"),
		Sign: 'sign',
	}
	return config
}, config => {
	return Promise.reject(config)
})

//响应拦截
http.interceptors.response.use((response) => {
	if (response.data.code !== '00000')
		return Promise.reject(response.data)
	return response.data
}, (response) => {
	const {
		statusCode
	} = response
	if (!statusCode) {
		uni.$u.toast("请检查你的网络连接或服务器状态")
		return Promise.reject("请检查你的网络连接")
	}
	uni.$u.toast(response.statusCode)
	return Promise.reject(response.statusCode)
})

export default http
