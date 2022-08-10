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


/**
 * @function reqUpdateUserinfo
 * @description 更新用户基本信息
 * @author DIFFFFFFT 2022/07/22
 */
export const reqUpdateUserinfo = (params = {}) => {
	return reqBaseUrl({
		url: '/api/user/update/userinfo',
		method: 'POST',
		data: params
	})
}


/**
 * @function reqGetUserInfo
 * @description 获取用户基本信息
 * @author DIFFFFFFT 2022/07/18 
 */
export const reqGetUserInfo = (params = {}) => {
	return reqBaseUrl({
		url: '/api/user/get/userinfo',
		method: 'POST',
		data: params
	})
}


/**
 * @function reqGetUserNearMaster
 * @description 根据用户的经纬度信息查询附近的师傅
 * @author DIFFFFFFT 2022/07/18 
 */
export const reqGetUserNearMaster = (params = {}) => {
	return reqBaseUrl({
		url: '/api/user/get/near/master',
		method: 'POST',
		data: params
	})
}



/**
 * @function reqGetUserAddr
 * @description 获取用户施工地址
 * @author DIFFFFFFT 2022/07/21
 */
export const reqGetUserAddr = (params = {}) => {
	return reqBaseUrl({
		url: '/api/user/get/addr',
		method: 'POST',
		data: params
	})
}


/**
 * @function reqCreateUserAddr
 * @description 新增用户施工地址
 * @author DIFFFFFFT 2022/07/21
 */
export const reqCreateUserAddr = (params = {}) => {
	return reqBaseUrl({
		url: '/api/user/create/addr',
		method: 'POST',
		data: params
	})
}


/**
 * @function reqUpdateUserAddr
 * @description 修改用户施工地址
 * @author DIFFFFFFT 2022/07/21
 */
export const reqUpdateUserAddr = (params = {}) => {
	return reqBaseUrl({
		url: '/api/user/update/addr',
		method: 'POST',
		data: params
	})
}



/**
 * @function reqGetUserLocation
 * @description 根据经纬度信息查询当前位置信息
 * @author DIFFFFFFT 2022/07/18 
 */
export const reqGetUserLocation = (params = {}) => {
	return reqBaseUrl({
		url: '/public/user/location',
		method: 'POST',
		data: params
	})
}



/**
 * @function reqUploadFile
 * @description 上传单文件
 * @author DIFFFFFFT 2022/07/25
 */
export const reqUploadFile = (params = {}) => {
	return reqBaseUpload({
		url: '/api/user/upload',
		filePath: params.filePath || ""
	})
}

/**
 * @function reqUploadFiles
 * @description 上传多文件
 * @author DIFFFFFFT 2022/07/25 
 */
export const reqUploadFiles = (params = {}) => {
	return reqBaseUpload({
		url: '/api/user/upload',
		files: params.files || []
	})
}
