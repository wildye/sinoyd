import store from '../store'

// 引用axios
var axios = require('axios')

// 配置API接口地址
var root = '/api/'

// todo: 接口处理函数
function apiAxios (method, url, params, success, failure) {
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    headers: store.state.login ? { 'authorization': 'Bearer ' + store.state.token } : {},
    withCredentials: false,
    validateStatus (status) {
      return status
    }
  })
    .then((res) => {
      if (success && res.status < 400) {
        success(res)
      }
      if (failure && res.status >= 400) {
        failure(res)
      }
    })
    .catch((err) => {
      if (err) console.log('API Error, HTTP Code: ' + err.response.status)
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
