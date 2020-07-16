import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const service = axios.create({
  baseURL: '/mock', //基础路径
  timeout: 20000 //超时限制
})
//请求拦截器
service.interceptors.request.use(config => {
  //开启进度条
  NProgress.start();
  // config是我们的配置项，必须处理完这个配置对象
  return config
})
// 响应拦截器
service.interceptors.response.use(response => {
  // 进度条停止
  NProgress.done();
  // 返回响应数据
  return response.data
}, error => {
  NProgress.done();
  alert('请求出错' + error.message || '未知错误')
  return new Promise(() => {}) //对错误不做处理
  // return Promise.reject(error)  //允许用户后续对错误进行处理
})
export default service