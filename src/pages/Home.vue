<template>
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
        <Artistes v-for="song in songs" :song="song" :key="song.docId"></Artistes>
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
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
      songs: []
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
      console.log(Math.round(scrollTop))
      if (bottomOfWindow) {
        console.log('we are on bottom')
      }
    },
    async getSongs() {
      const snapshots = await songsCollection.get()
      snapshots.forEach((document) => {
        this.songs.push({
          DocId: document.id,
          ...document.data()
        })
      })
    }
  }
}
</script>
