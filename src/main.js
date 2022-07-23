import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import {
  Button, Radio, Container, Main, Header, Aside, menu, submenu,
  menuItem, MenuItemGroup, dropdown, dropdownMenu, dropdownItem,
  row, card, col, table, tableColumn, breadcrumb, breadcrumbItem, tag,
  form, formItem,input,Select,Switch,DatePicker,Option,Dialog,
  Pagination,MessageBox, Message
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import './assets/less/index.less'

import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Radio)

Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)

Vue.use(menu)
Vue.use(submenu)
Vue.use(menuItem)
Vue.use(MenuItemGroup)
Vue.use(dropdown)
Vue.use(dropdownMenu)
Vue.use(dropdownItem)
Vue.use(row)
Vue.use(card)
Vue.use(col)
Vue.use(table)
Vue.use(tableColumn)
Vue.use(breadcrumb)
Vue.use(breadcrumbItem)
Vue.use(tag)
Vue.use(form)
Vue.use(formItem)
Vue.use(input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)

Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
