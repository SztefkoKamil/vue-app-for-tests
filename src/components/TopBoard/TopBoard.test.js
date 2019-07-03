import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TopBoard from './TopBoard.vue'

describe('TopBoard.vue - tests', () => {

  const localVue = createLocalVue()
  localVue.use(Vuex)

  let store, getters
  
  beforeEach(() => {
    getters = {
      getClickCounter: jest.fn(() => 0)
    }
    store = new Vuex.Store({ getters })
  })

  it('should have h3.top-board__clickCounterDisplay equal to 0', () => {
    const wrapper = shallowMount(TopBoard, { store, localVue })

    const counterDisplay = wrapper.find('h3.top-board__clickCounterDisplay')
    
    expect(counterDisplay.text()).toBe('0')
  })

})