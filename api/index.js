import http from "@/common/http"

export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

export const getMenu = (data) => http.get('/ebapi/public_api/index', data)
