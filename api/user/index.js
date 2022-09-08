import sign from '@/util/sign'
import toast from '@/util/toast.js'
import {
	BASE_URL,
	DEVICE_ID,
	reqBaseUrl,
	reqBaseUpload
} from "@/common/request.js"


/**
 * @function reqUserLogin
 * @description 用户登录
 * @author DIFFFFFFT 2022/07/18 
 */
export const reqUserLogin = (params = {}) => {
	return reqBaseUrl({
		url: '/public/user/login',
		method: 'POST',
		data: params
	})
}