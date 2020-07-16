import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes  //注册所有路由
})
// 修正多次点击搜索按钮出现报错的问题
const originPush = VueRouter.prototype.push
const oringinReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.call(this,location).catch(()=>{})
  } else {
    return originPush.call(this,location,onResolved,onRejected)
  }
}

VueRouter.prototype.replace = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(() => {})
  } else {
    return originReplace.call(this, location, onResolved, onRejected)
  }
}