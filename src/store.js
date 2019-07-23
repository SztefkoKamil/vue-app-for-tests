import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clickCounter: 0,
    toUpper: '',
    toReverse: ''
  },
  getters: {
    getClickCounter(state) {
      return state.clickCounter
    },
    getToUpper(state){
      return state.toUpper
    },
    getToReverse(state) {
      return state.toReverse
    }
  },
  mutations: {
    incrementClickCounter(state) {
      state.clickCounter++
    },
    decrementClickCounter(state) {
      state.clickCounter--
    },
    toUpper(state, data){
      state.toUpper = data;
    },
    toReverse(state, data) {
      state.toReverse = data
    }
  },
  actions: {
    toUpper(context, data){
      context.commit('toUpper', data.toUpperCase());
    },
    toReverse(context, data) {
      const reversed = data.split('').reverse().join('')
      context.commit('toReverse', reversed)
    }
  }
})
