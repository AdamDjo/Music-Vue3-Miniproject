<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <Upload :addSong="addSong"></Upload>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <CompositionItem
              v-for="(song, i) in songs"
              :key="song.docId"
              :song="song"
              :updateSong="updateSong"
              :updatedUnsavedFlag="updatedUnsavedFlag"
              :removeSong="removeSong"
              :index="i"
            ></CompositionItem>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Upload from '../components/Upload.vue'
import CompositionItem from '../components/CompositionItem.vue'
import { useUserStore } from '../stores/user'
import { auth, songsCollection } from '../plugins/firebase/firebase'
export default {
  name: 'manage',
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()
    snapshot.forEach(this.addSong)
  },
  data() {
    return {
      songs: [],
      unsavedFlag: false
    }
  },
  methods: {
    addSong(document) {
      const song = { ...document.data(), docId: document.id }
      this.songs.push(song)
    },
    updateSong(i, values) {
      this.songs[i].modified_name = values.modified_name
      this.songs[i].genre = values.genre
    },
    removeSong(i) {
      this.songs.splice(i, 1)
    },
    updatedUnsavedFlag(value) {
      this.unsavedFlag = value
    }
  },
  beforeRouteLeave(to, from, next) {
    // ...
    if (!this.unsavedFlag) {
      next()
    } else {
      const leave = confirm('You have unsaved changes. are you sure you want to leave?')
      next(leave)
    }
  },
  beforeRouteEnter(to, from, next) {
    const store = useUserStore()
    if (store.userLoggedIn) {
      console.log('before enter guard')
      next()
    } else {
      next({ name: 'home' })
    }
  },
  components: { Upload, CompositionItem }
}
</script>
