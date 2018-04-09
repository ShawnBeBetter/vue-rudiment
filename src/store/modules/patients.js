
// initial state
const state = {
  patients: [
    {
      id: 0,
      photo: 'https://dummyimage.com/150x150/ccc/000',
      name: '当当',
      status: '血糖异常'
    },
    {
      id: 1,
      photo: 'https://dummyimage.com/150x150/ccc/000',
      name: '当当1',
      status: '正常'
    },
    {
      id: 2,
      photo: 'https://dummyimage.com/150x150/ccc/000',
      name: '当当2',
      status: '血糖异常'
    }
  ]
}

// getters
const getters = {
  patients: state => state.patients
}

// actions
const actions = {

}

// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
