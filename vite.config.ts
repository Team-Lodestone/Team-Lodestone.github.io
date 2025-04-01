import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(),
    legacy({
      targets: ['defaults', 'IE 11', 'Chrome 43'],
      additionalLegacyPolyfills: [
        'regenerator-runtime/runtime',
        'core-js/stable/map',
        'core-js/stable/set',
        'core-js/stable/object/assign'
      ]
    }),
  ],
  server: {
    allowedHosts: ['localhost', '127.0.0.1', 'team-lodestone.github.io'],
  }
})
