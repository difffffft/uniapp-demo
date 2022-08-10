import {
	BASE_URL,
	DEVICE_ID,
	reqBaseUrl,
} from "@/common/request.js"


/**
 * @function reqGetGlobalConfig
 * @description 获取全局的各种配置
 * @author DIFFFFFFT 2022/07/22
 */
export const reqGetGlobalConfig = (params = {}) => {
	return reqBaseUrl({
		url: '/global/config',
		method: 'POST',
		data: params
	})
}