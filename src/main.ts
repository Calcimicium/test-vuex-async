import Vue from 'vue'
import Vuex from 'vuex'
import AppState from './app-state'
import App from './App.vue'
import OpenFoodFactsModule from './openfoodfacts/module'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store<AppState>({})
store.registerModule('openfoodfacts', OpenFoodFactsModule)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
