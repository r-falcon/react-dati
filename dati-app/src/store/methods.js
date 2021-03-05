// import state from './state'

let methods = {
  // add: function (state, action) {
  //   state.num += 10
  //   return state
  // },
  // sub: function (state, action) {
  //   state.num -= 5
  //   return state
  // },
  random: function (state, action) {
    state.itemList = action.content
    return state
  },
}

export default methods
