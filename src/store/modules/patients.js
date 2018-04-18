
// initial state
const state = {
  patients: [
    {
      id: 1,
      photo: 'https://dummyimage.com/150x150/ccc/000',
      name: '李春江',
      sex: '男',
      age: '52',
      isLike: true,
      testCount: 8,
      lowCount: 2,
      enrollDays: 123,
      hasNews: false,
      tags: ['低血糖', '高血糖']
    },
    {
      id: 2,
      photo: 'https://dummyimage.com/150x150/ccc/000',
      name: '王家卫',
      sex: '男',
      age: '29',
      isLike: false,
      testCount: 32,
      lowCount: 7,
      enrollDays: 60,
      hasNews: true,
      tags: ['低血糖']
    },
    {
      id: 3,
      photo: 'https://dummyimage.com/150x150/ccc/000',
      name: '慕容娜娜',
      sex: '女',
      age: '63',
      isLike: false,
      testCount: 10,
      lowCount: 0,
      enrollDays: 7,
      hasNews: false,
      tags: ['高血糖']
    },
    {
      id: 4,
      photo: 'https://dummyimage.com/150x150/ccc/000',
      name: '欧阳皮皮',
      sex: '女',
      age: '36',
      isLike: false,
      testCount: 0,
      lowCount: 0,
      enrollDays: 25,
      hasNews: false,
      tags: ['低血糖', '高血糖', '连续低糖']
    }
  ],
  sortPatients: []
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
