import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clickCounter: 0,
    toUpper: ''
  },
  getters: {
    getClickCounter(state) {
      return state.clickCounter
    },
    getToUpper(state){
      return state.toUpper
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
    }
  },
  actions: {
    toUpper(context, data){
      context.commit('toUpper', data.toUpperCase());
    }
  }
})
