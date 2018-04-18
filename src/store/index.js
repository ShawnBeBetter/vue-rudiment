import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import patients from './modules/patients'
import user from './modules/user'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    patients,
    user
  },
  plugins: [createLogger()]
})
