<template>
  <!-- Header -->
  <app-header />

  <!-- Introduction -->
  <Intro></Intro>

  <!-- Main Content -->
  <Artistes></Artistes>

  <!-- Player -->
  <Player></Player>
  <!-- Auth Modal -->
  <Auth></Auth>
</template>
<script>
import AppHeader from './components/Header.vue'
import Auth from './components/Auth.vue'
import Player from './components/Player.vue'
import Artistes from './components/Artistes.vue'
import Intro from './components/Intro.vue'
import { mapWritableState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { auth } from './plugins/firebase/firebase'
export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    Player,
    Artistes,
    Intro
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
<style></style>
