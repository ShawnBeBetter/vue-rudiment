import shop from '../../api/shop'
// import axios from 'axios';

// initial state
const state = {
  user: {
    name: 'shawn',
    role: 'director',
    entryTime: '2018-4-17'
  },
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
