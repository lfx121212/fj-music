import axios from 'axios' // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
let loadingCounts = 0
import { Loading } from 'element-ui' // 统计loading次数


// request 拦截器
axios.interceptors.request.use(
    (config) => {
        // 根据loading配置，显示loading加载
        if (axios.defaults.Loading) {
            if (!loadingCounts) {
                Loading.service({
                    background: 'rgba(0,0,0,.7)',
                    text: 'Loading...'
                })
            }
            loadingCounts++
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// response拦截器
axios.interceptors.response.use(
    (response) => {
        setTimeout(() => {
            loadingCounts--
            // 所有请求结束后关闭loading
            if (loadingCounts === 0) {
                Loading.service().close()
            }
        }, 500)

        return response
    },
    (error) => {
        // 所有请求结束后关闭loading
        loadingCounts--
        if (loadingCounts === 0) {
            Loading.service().close()
        }
        return Promise.resolve(error.response)
    }
)

// 设置默认接口方式
export default {
    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data)
            })
        });
    },
    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    },
    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    put(url, params) {
        return new Promise((resolve, reject) => {
            axios.put(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    },
    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    delete(url, params) {
        return new Promise((resolve, reject) => {
            axios.delete(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    }
}

