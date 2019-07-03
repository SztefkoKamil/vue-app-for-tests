import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import LeftPanel from './LeftPanel.vue'

describe('TopBoard.vue - tests', () => {

  const localVue = createLocalVue()
  localVue.use(Vuex)

  let store, mutations
  
  beforeEach(() => {
    mutations = {
      incrementClickCounter: jest.fn(() => {})
    }
    store = new Vuex.Store({ mutations })
  })

  it('should have button.left-panel__clickCounterIncrement', () => {
    const wrapper = shallowMount(LeftPanel,)

    const button = wrapper.find('button.left-panel__clickCounterIncrement')
    
    expect(button).toBeTruthy()
  })

  it('btn click should call incrementClickCounter mutation', () => {
    const wrapper = shallowMount(LeftPanel, { store, localVue })

    wrapper.find('button.left-panel__clickCounterIncrement').trigger('click')
    
    expect(mutations.incrementClickCounter).toHaveBeenCalled()
  })

})