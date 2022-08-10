import sign from '@/util/sign'
import toast from '@/util/toast.js'
import ErrorCode from '@/common/code.js'

export const DEV_ENV = true
export const BASE_URL = DEV_ENV ? "http://192.168.2.19:12369" : ""
export const INFO = uni.getSystemInfoSync()
export const DEVICE_ID = INFO.deviceId

/**
 * @function reqBaseUrl
 * @description 基本请求的封装
 * @param params:url,data,method
 * @return Promise
 * @author DIFFFFFFT 2022/04/27 
 */
export const reqBaseUrl = (params = {}) => {
	return new Promise((resolve, reject) => {
		let token = uni.getStorageSync("token") || ''
		uni.request({
			...params,
			url: BASE_URL + params.url || '',
			header: {
				Sign: sign({
					"Device-Id": DEVICE_ID
				}),
				Token: token,
				"Device-Id": DEVICE_ID,
			},
			success: (res) => {
				if (res.statusCode === 200 && res.data.code === ErrorCode.SUCCESS.code) {
					if (res.header.Token) {
						uni.setStorageSync('token', res.header.Token);
					}
					resolve(res.data)
				} else if (res.statusCode === 200 && res.data.code !== ErrorCode.SUCCESS.code) {
					for (let key in ErrorCode) {
						let error_code = ErrorCode[key].code
						let error_msg = res.data.msg
						if (res.data.code === error_code) {
							reject({
								message: error_msg
							})
							toast(error_msg)
							break
						}
					}
				} else {
					let error_msg = "服务器出现BUG:" + res.statusCode
					reject({
						message: error_msg
					})
					toast(error_msg)
				}
			},
			fail: (err) => {
				let error_msg = "请检查你的网络状态和服务器状态!"
				reject({
					message: error_msg
				})
				toast(error_msg)
			}
		})
	})
}


/**
 * @function reqBaseUpload
 * @description 基本文件上传的封装
 * @param params:url,data,method
 * @return Promise
 * @author DIFFFFFFT 2022/04/25 
 */
export const reqBaseUpload = (params = {}) => {
	return new Promise((resolve, reject) => {
		let token = uni.getStorageSync("token") || ''
		uni.uploadFile({
			...params,
			url: BASE_URL + params.url || '',
			header: {
				Sign: sign({
					"Device-Id": DEVICE_ID
				}),
				Token: token,
				"Device-Id": DEVICE_ID,
			},
			name: 'file',
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				let error_msg = "请检查你的网络状态和服务器状态!"
				reject({
					message: error_msg
				})
				toast(error_msg)
			}
		});
	})
}
