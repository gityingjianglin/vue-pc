import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins' // plugins
import router from './router'
import store from './store'
import filters from './assets/filter/filter.js'
import element from './uiConfig/elementUi'
// import ECharts modules manually to reduce bundle size

Vue.use(element)
Vue.use(plugins)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// register globally (or you can do it locally)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
