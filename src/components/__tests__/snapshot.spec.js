import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Artistes from '@/components/Artistes.vue'
import { describe } from 'vitest'
describe('snapshots Artistes.vue', () => {
  test('renders correctly', () => {
    const song = {
      DocId: 'abc',
      modified_name: 'test',
      display_name: 'test',
      comment_count: 5
    }
    const wrapper = shallowMount(Artistes, {
      props: { song },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
