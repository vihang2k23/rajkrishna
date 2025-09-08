<!-- pages/services.vue -->
<template>
  <div>
    <PageHeader
      title="Our Services"
      subtitle="Comprehensive sustainable solutions"
    />

    <ServicesDetailed />

    <ProcessSection />

    <CTASection
      title="Ready to start your project?"
      buttonText="Get in Touch"
      link="/contact"
    />
  </div>
</template>

<script setup >
import { useHead } from 'nuxt/app';

useHead({
  title: "Services",
});
</script>
