import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import RightPanel from './RightPanel.vue'

describe('RightPanel.vue - tests', () => {

  const localVue = createLocalVue()
  localVue.use(Vuex)

  let store, mutations, actions
  
  beforeEach(() => {
    mutations = {
      decrementClickCounter: jest.fn(() => {})
    },
    actions = {
      toReverse: jest.fn(() => {})
    }
    store = new Vuex.Store({ mutations, actions })
  })

  // counterClick
  it('should have button.right-panel__clickCounterDecrement', () => {
    const wrapper = shallowMount(RightPanel,)

    const button = wrapper.find('button.right-panel__clickCounterDecrement')
    
    expect(button).toBeTruthy()
  })

  it('btn click should call decrementClickCounter mutation', () => {
    const wrapper = shallowMount(RightPanel, { store, localVue })

    wrapper.find('button.right-panel__clickCounterDecrement').trigger('click')
    
    expect(mutations.decrementClickCounter).toHaveBeenCalled()
  })


  //toReverse
  it('should have button.right-panel__toReverseBtn', () => {
    const wrapper = shallowMount(RightPanel)

    const button = wrapper.find('button.right-panel__toReverseBtn')
    
    expect(button).toBeTruthy()
  })

  it('input.toReverse-input output should be stored in inputToUpper', () => {
    const wrapper = shallowMount(RightPanel)

    wrapper.find('input.toReverse-input').setValue('hello')

    expect(wrapper.vm.inputToReverse).toBe('hello')
  })

  it('form.right-panel__toReverse-form submit should call toReverse action', () => {
    const wrapper = shallowMount(RightPanel, { store, localVue })

    wrapper.find('form.right-panel__toReverse-form').trigger('submit')
    
    expect(actions.toReverse).toHaveBeenCalled()
  })

  it('form.right-panel__toReverse-form submit should clear inputToUpper', () => {
    const wrapper = shallowMount(RightPanel, { store, localVue })

    wrapper.find('form.right-panel__toReverse-form').trigger('submit')
    
    expect(wrapper.vm.inputToReverse).toBe('')
  })

})