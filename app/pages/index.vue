<!-- pages/index.vue -->
<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <BrandsView />
    <ServicesOverview />
    <ProjectsShowcase />
    <TestimonialsSection />
    <Credential />
    <!-- <CTASection /> -->

    <!-- Floating WhatsApp Button -->
    <a
      href="https://wa.me/917574858200?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        class="w-16 h-16"
      />
    </a>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: 'Home'
})
</script>
