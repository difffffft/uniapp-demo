import http from "@/common/http"

export const reqGetTest = (data) => http.get('/get_test', data)

export const reqPostTest = (params, config = {}) => http.post('/post_test', params, config)

export const reqPostTestV2 = (params, config = {}) => http.post('/testip.php', params, config)