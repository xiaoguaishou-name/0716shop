import Mock from 'mockjs'
import banner from '@/mock/banner'
import floor from '@/mock/floor'
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor',{code:200,data:floor})