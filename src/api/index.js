import Ajax from '@/ajax/Ajax'
//配置get请求，获取动态数据
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method:'GET'
})
import mockAjax from '@/ajax/mockAjax'
export const reqBannerList = () => mockAjax({
  url: '/banner',
  method:'GET'
})
export const reqFloorList = () => mockAjax.get('/floor')