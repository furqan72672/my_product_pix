import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import SignIn from './views/SignIn'
import Dashboard from './components/Dashboard'
import Products from './views/Products'
import ManageProduct from './views/ManageProduct'
import Categories from './views/Categories'


Vue.config.productionTip = false

Vue.use(VueRouter)
const routes=[
  {path:'/'},
  {path:'/signin',component:SignIn},
  {path:'/dashboard',component:Dashboard},
  {path:'/products',component:Products},
  {path:'/manageproduct',component:ManageProduct},
  {path:'/categories',component:Categories},
]

const router=new VueRouter({
  routes
})

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
