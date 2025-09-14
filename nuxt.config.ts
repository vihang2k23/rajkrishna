import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
  
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Open Sans': [400, 500, 600, 700]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://www.rajkrishna.com'
    }
  },

  image: {
    domains: ['www.rajkrishna.com'],
    presets: {
      cover: {
        modifiers: {
          format: 'webp',
          quality: 80,
          fit: 'cover'
        }
      }
    }
  },


})
// import tailwindcss from "@tailwindcss/vite";

// export default defineNuxtConfig({
//   compatibilityDate: "2025-07-15",
//   devtools: { enabled: true },
//   modules: ['nuxt-icon'],
//   css: ['~/assets/css/main.css'],
//   vite: {
//     plugins: [
//       tailwindcss(),
//     ],
//   },
// });