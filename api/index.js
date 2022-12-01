import http from "@/common/http"

export const reqGet = (data) => http.get('/get-user-info', data)

export const reqPost = (params, config = {}) => http.post('/update-user-info', params, config)