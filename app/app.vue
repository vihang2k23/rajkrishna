<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useHead } from 'nuxt/app';

// Smooth scrolling for anchor links
const handleSmoothScroll = (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    e.preventDefault();
    const href = link.getAttribute('href');
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Add event listener when the component is mounted
onMounted(() => {
  document.addEventListener('click', handleSmoothScroll);
});

// Clean up event listener
onUnmounted(() => {
  document.removeEventListener('click', handleSmoothScroll);
});

// Your existing useHead code below...
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