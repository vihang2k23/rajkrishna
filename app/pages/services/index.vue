<!-- pages/services.vue -->
<template>
  <div>
    <PageHeader
      title="Our Services"
      subtitle="Engineering Energy with Precision."
    />

    <ServicesDetailed />

    <ProcessSection />

    <!-- <CTASection
      title="Ready to start your project?"
      buttonText="Get in Touch"
      link="/contact"
    /> -->
  </div>
   <!-- Floating WhatsApp Button -->
   <a
      href="https://wa.me/919510594387?text=Hello%20I%20am%20interested%20in%20your%20services"
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
</template>

<script setup >
import { useHead } from 'nuxt/app';

useHead({
  title: "Services",
});
</script>
