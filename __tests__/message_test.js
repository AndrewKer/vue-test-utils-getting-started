// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Message from '../message.vue'

describe('Message', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Message)

})
