<template>
  <!-- Header -->
  <app-header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- Player -->
  <AppPlayer></AppPlayer>
  <!-- Auth Modal -->
  <Auth></Auth>
</template>
<script>
import AppHeader from './components/Header.vue'
import Auth from './components/Auth.vue'
import AppPlayer from './components/Player.vue'

import { mapWritableState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { auth } from './plugins/firebase/firebase'
export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    AppPlayer
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
<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
