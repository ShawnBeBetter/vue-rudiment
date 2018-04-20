import axios from 'axios'

const httpClient = axios.create({
  // baseURL: 'http://localhost:29832/lccp/',
  baseURL: '/lccp/',
  timeout: 0
  // headers: { 'Cache-Control': 'no-cache, must-revalidate' }
  // withCredentials: true
})

// 拦截响应response，并做一些错误处理
httpClient.interceptors.response.use((response) => {
  return response
}, (err) => {
  if (err && err.response) {
    console.log(err.response.status)
  }
  return Promise.reject(err)
})

// httpClient.install = (Vue) => {
//   Vue.prototype.$httpClient = httpClient
// }

export default httpClient
