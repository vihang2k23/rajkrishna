<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup >
import { useHead } from 'nuxt/app';
// Main app entry point
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Rajkrishna` : 'Rajkrishna';
  },
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Rajkrishna - Engineering Energy with Precision' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
  ]
})
</script>
<style>
@import "./assets/css/main.css";
</style>