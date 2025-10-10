<!-- pages/index.vue -->
<template>
  <div>

    <HeroSection />
    <FeaturesSection />
    <CTASection/>
    <BrandsView />
    <ServicesOverview />
    <ProjectsShowcase />
    <TestimonialsSection />
    <Credential />
    <!-- <CTASection /> -->

    <!-- Floating WhatsApp Button -->
    <a
      href="https://wa.me/919510594387?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
    >
    <img
 src="/whatsapp-icon.png"
  format="webp"

  loading="lazy"
  alt="WhatsApp"
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
<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #25D366;
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  z-index: 1000;
}

.whatsapp-float:hover {
  background: #128C7E;
}

.whatsapp-float img {
  width: 2rem;
  height: 2rem;
}
</style>
