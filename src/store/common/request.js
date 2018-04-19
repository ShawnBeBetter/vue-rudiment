import axios from 'axios'

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {

}, (err) => { // 这里是返回状态码不为200时候的错误处理
  if (err && err.response) {
    console.log(err.response.status)
  }
  return Promise.reject(err)
})

axios.install = (Vue) => {
  Vue.prototype.$axios = axios
}

export default axios
