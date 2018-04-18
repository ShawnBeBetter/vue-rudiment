import shop from '../../api/shop'
// import axios from 'axios';

// initial state
const state = {
  user: {
    name: 'shawn',
    role: 'doctor',
    entryTime: '2018-4-17',
    sex: '男',
    age: '22'
  },
  all: []
}

// getters
const getters = {
  role: state => state.user.role
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
