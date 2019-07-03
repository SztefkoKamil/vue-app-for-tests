import { shallowMount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue - tests', () => {

  it('Should contains 3 components', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.vm.$children).toHaveLength(3)
  })
  
});