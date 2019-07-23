import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'

describe('VUEX tests', () => {

  const localVue = createLocalVue()
  localVue.use(Vuex)

  beforeEach(() => {
    store.state.clickCounter = 0
    store.state.toUpper = ''
  })

  // getters
  it('should have getClickCounter getter equal to 0', () => {
    const wrapper = shallowMount(App, { store, localVue })

    expect(wrapper.vm.$store.getters.getClickCounter).toBe(0)
  })

  it('should have getToUpper getter equal to "" ', () => {
    const wrapper = shallowMount(App, { store, localVue })

    expect(wrapper.vm.$store.getters.getToUpper).toBe('')
  })

  //mutations
  it('should have incrementClickCounter mutation which increment clickCounter by 1', () => {
    const wrapper = shallowMount(App, { store, localVue })

    expect(wrapper.vm.$store.state.clickCounter).toBe(0)

    wrapper.vm.$store.commit('incrementClickCounter')

    expect(wrapper.vm.$store.state.clickCounter).toBe(1)
  })

  it('should have decrementClickCounter mutation which decrement clickCounter by 1', () => {
    const wrapper = shallowMount(App, { store, localVue })

    expect(wrapper.vm.$store.state.clickCounter).toBe(0)

    wrapper.vm.$store.commit('decrementClickCounter')

    expect(wrapper.vm.$store.state.clickCounter).toBe(-1)
  })

  it('should have toUpper mutation which mutate toUpper', () => {
    const wrapper = shallowMount(App, { store, localVue })

    expect(wrapper.vm.$store.state.toUpper).toBe('')

    wrapper.vm.$store.commit('toUpper', 'ok')

    expect(wrapper.vm.$store.state.toUpper).toBe('ok')
  })

  //actions
  it('should have toUpper action which transform input data & call toUpper mutation', () => {
    const wrapper = shallowMount(App, { store, localVue })

    wrapper.vm.$store.dispatch('toUpper', 'ok')

    expect(wrapper.vm.$store.getters.getToUpper).toBe('OK')
  })

})