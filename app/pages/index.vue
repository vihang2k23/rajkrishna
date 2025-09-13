<!-- pages/index.vue -->
<template>
    <div>
      <HeroSection />
      <FeaturesSection />
      <BrandsView/>
      <ServicesOverview />
      <ProjectsShowcase />
      <TestimonialsSection />
      <CTASection />
    </div>
  </template>
  
  <script setup >
import { useHead } from 'nuxt/app';

  
  useHead({
    title: 'Home'
  })
  
  // Components would be auto-imported from components/ directory :cite[1]
  </script>