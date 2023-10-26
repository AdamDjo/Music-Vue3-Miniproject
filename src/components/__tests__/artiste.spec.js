import Artiste from '@/components/Artistes.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe('Artiste.vue', () => {
  test('render song.displayname', () => {
    const song = {
      display_name: 'test'
    }
    const wrapper = shallowMount(Artiste, {
      props: {
        song
      },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    const compositionAuthor = wrapper.find('.text-gray-500')
    expect(compositionAuthor.text()).toBe(song.display_name)
  })
  test('render song.docId in id attribute', () => {
    const song = {
      DocId: 'abc'
    }
    const wrapper = shallowMount(Artiste, {
      props: {
        song
      },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    const compositionAuthor = wrapper.find('.text-gray-500')
    expect(wrapper.classes()).toContain(`song-id-${song.DocId}`)
  })
})
