import mock from 'mockjs'
import homeApi from './mockServeData/home'

mock.mock('/home/getData',homeApi.getStatisticalData)