<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }">{{
              $t('menu.About')
            }}</router-link>
          </li>
          <!-- Navigation Links -->
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">
              {{ $t('menu.Login') }} / {{ $t('menu.Register') }}</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }">{{
                $t('menu.Manage')
              }}</router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut()">{{
                $t('menu.Logout')
              }}</a>
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="changeLocale">
              {{ currentLocale }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapStores } from 'pinia'
import { useModalStore } from '../stores/modal'
import { useUserStore } from '@/stores/user'

export default {
  name: 'Header',
  setup() {
    const userStore = useUserStore()
    return { userLoggedIn: userStore.userLoggedIn, signOut: userStore.signOut }
  },
  computed: {
    ...mapStores({
      isOpen: (store) => store.useModalStore.isOpen
    }),
    currentLocale() {
      return this.$i18n.locale === 'fr' ? 'French' : 'English'
    }
  },
  methods: {
    toggleAuthModal() {
      const modalStore = useModalStore()
      modalStore.isOpen = !modalStore.isOpen
      console.log(modalStore.isOpen)
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'fr' ? 'en' : 'fr'
    }
  }
}
</script>
