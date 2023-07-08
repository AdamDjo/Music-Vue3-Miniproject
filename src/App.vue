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
export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    Player,
    Artistes,
    Intro
  }
}
</script>
<style></style>
