import http from '@/utils/HttpUtil'
import {getBaseURL} from '../ApiConfig'

export const login = (data) => {
    return http.post(`${getBaseURL()}/login`, data)
}
