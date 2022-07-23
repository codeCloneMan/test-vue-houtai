import mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'


mock.mock('/home/getData',homeApi.getStatisticalData)
mock.mock('/user/add','post',userApi.createUser)
mock.mock('/user/edit','post',userApi.updateUser)

mock.mock(/user\/getUser/,'get',userApi.getUserList)
mock.mock('/user/del','post',userApi.deleteUser)