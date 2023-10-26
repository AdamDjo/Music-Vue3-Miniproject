import { shallowMount } from '@vue/test-utils'
import Home from '../../pages/Home.vue'
import Artiste from '@/components/Artistes.vue'
describe('Home.vue', () => {
  test('render list of songs', () => {
    const songs = [{}, {}, {}]
    const component = shallowMount(Home, {
      data() {
        return { songs }
      },
      global: {
        mocks: {
          $t: (message) => message
        }
      }
    })
    const items = component.findAllComponents(Artiste)
    expect(items).toHaveLength(songs.length)
    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i])
    })
  })
})
