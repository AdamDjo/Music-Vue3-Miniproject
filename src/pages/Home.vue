<template>
  <main>
    <!-- Introduction -->
    <Intro></Intro>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <!-- Icon -->
          <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <Artistes v-for="song in songs" :song="song" :key="song.DocId"></Artistes>
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>
<script>
import Intro from '../components/Intro.vue'
import Artistes from '../components/Artistes.vue'
import { songsCollection } from '../plugins/firebase/firebase'
export default {
  name: 'Home',
  components: { Intro, Artistes },
  data() {
    return {
      songs: [],
      maxPerPage: 3,
      pendingRequest: false
    }
  },
  async created() {
    this.getSongs()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement
      const { innerHeight } = window
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

      if (bottomOfWindow) {
        this.getSongs()
      }
    },
    async getSongs() {
      if (this.pendingRequest) {
        return
      }
      this.pendingRequest = true

      try {
        let snapshots

        let query = songsCollection.orderBy('modified_name')

        if (this.songs.length > 0) {
          const lastSong = this.songs[this.songs.length - 1]
          const lastDoc = await songsCollection.doc(lastSong.DocId).get()

          if (lastDoc.exists) {
            query = query.startAfter(lastDoc)
          }
        }

        snapshots = await query.limit(this.maxPerPage).get()

        snapshots.forEach((document) => {
          this.songs.push({
            DocId: document.id,
            ...document.data()
          })
        })
      } catch (error) {
        console.error('Error fetching songs:', error)
      } finally {
        this.pendingRequest = false
      }
    }
  }
}
</script>
