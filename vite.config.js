import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }, // Vous pouvez ajuster la configuration pour le développement
      manifest: {
        name: 'Music App by Adam',
        short_name: 'Music App',
        description: 'My Awesome music App',
        theme_color: '#ff5e3a',
        icons: [
          {
            src: '/assets/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ],
        // Captures d'écran pour le form_factor "wide" (en taille et format appropriés)
        screenshots: [
          {
            src: '/assets/img/pwa-320px.png',
            sizes: '320x320',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
