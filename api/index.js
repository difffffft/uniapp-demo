import http from "@/common/http"

export const reqGetTest = (data) => http.get('/get_test', data)

export const reqPostTest = (params, config = {}) => http.post('/post_test', params, config)