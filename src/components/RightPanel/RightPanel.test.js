import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import RightPanel from './RightPanel.vue'

describe('TopBoard.vue - tests', () => {

  const localVue = createLocalVue()
  localVue.use(Vuex)

  let store, mutations
  
  beforeEach(() => {
    mutations = {
      decrementClickCounter: jest.fn(() => {})
    }
    store = new Vuex.Store({ mutations })
  })

  it('should have button.right-panel__clickCounterDecrement', () => {
    const wrapper = shallowMount(RightPanel,)

    const button = wrapper.find('button.right-panel__clickCounterDecrement')
    
    expect(button).toBeTruthy()
  })

  it('btn click should call DecrementClickCounter mutation', () => {
    const wrapper = shallowMount(RightPanel, { store, localVue })

    wrapper.find('button.right-panel__clickCounterDecrement').trigger('click')
    
    expect(mutations.decrementClickCounter).toHaveBeenCalled()
  })

})