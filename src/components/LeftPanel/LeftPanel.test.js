import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import LeftPanel from './LeftPanel.vue'

describe('leftPanel.vue - tests', () => {

  const localVue = createLocalVue()
  localVue.use(Vuex)

  let store, mutations, actions
  
  beforeEach(() => {
    mutations = {
      incrementClickCounter: jest.fn(() => {})
    }
    actions = {
      toUpper: jest.fn(() => {})
    }
    store = new Vuex.Store({ mutations, actions })
  })

    // counter tests
  it('should have button.left-panel__clickCounterIncrement', () => {
    const wrapper = shallowMount(LeftPanel)

    const button = wrapper.find('button.left-panel__clickCounterIncrement')
    
    expect(button).toBeTruthy()
  })

  it('btn click should call incrementClickCounter mutation', () => {
    const wrapper = shallowMount(LeftPanel, { store, localVue })

    wrapper.find('button.left-panel__clickCounterIncrement').trigger('click')
    
    expect(mutations.incrementClickCounter).toHaveBeenCalled()
  })

    // toUpper tests
  it('should have button.left-panel__toUpperBtn', () => {
    const wrapper = shallowMount(LeftPanel)

    const button = wrapper.find('button.left-panel__toUpperBtn')
    
    expect(button).toBeTruthy()
  })

  it('input.toUpper-input output shpuld be stored in inputToUpper', () => {
    const wrapper = shallowMount(LeftPanel)

    wrapper.find('input.toUpper-input').setValue('ok')

    expect(wrapper.vm.inputToUpper).toBe('ok')
  })

  it('form.left-panel__toUpper-form submit should call toUpper action', () => {
    const wrapper = shallowMount(LeftPanel, { store, localVue })

    wrapper.find('form.left-panel__toUpper-form').trigger('submit')
    
    expect(actions.toUpper).toHaveBeenCalled()
  })

  it('form.left-panel__toUpper-form submit should clear inputToUpper', () => {
    const wrapper = shallowMount(LeftPanel, { store, localVue })

    wrapper.find('form.left-panel__toUpper-form').trigger('submit')
    
    expect(wrapper.vm.inputToUpper).toBe('')
  })

})