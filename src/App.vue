<template>
  <!-- Header -->
  <Header></Header>

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
import Header from './components/Header.vue'
import Auth from './components/Auth.vue'
import Player from './components/Player.vue'
import Artistes from './components/Artistes.vue'
import Intro from './components/Intro.vue'
export default {
  name: 'App',
  components: {
    Header,
    Auth,
    Player,
    Artistes,
    Intro
  }
}
</script>
<style></style>
