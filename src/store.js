import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clickCounter: 0
  },
  getters: {
    getClickCounter(state) {
      return state.clickCounter
    }
  },
  mutations: {
    incrementClickCounter(state) {
      state.clickCounter++
    },
    decrementClickCounter(state) {
      state.clickCounter--
    }
  },
  actions: {

  }
})
