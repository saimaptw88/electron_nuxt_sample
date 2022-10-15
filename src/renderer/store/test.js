export const state = () => ({
  test: '',
})

export const getters = {
  test(state){
    return state.test
  },
}

export const mutations = {
  setTest(state, test){
    state.test = test
  },
}

export const actions = {
  getTest({commit}){
    const test = "hello electron"
    commit('setTest', test)
  },
}
