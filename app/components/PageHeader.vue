<!-- components/PageHeader.vue -->
<template>
    <section class="page-header">
      <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </section>
  </template>
  
  <script setup >
  defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  })
  </script>
  
  <style scoped>
.page-header {
  background: linear-gradient(135deg, #092B47 0%, #EFA72E 100%);
  color: #FFFFFF;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Glow effect */
.page-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  animation: rotateGlow 10s linear infinite;
}

@keyframes rotateGlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Title */
.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 1;
}

/* Subtitle */
.page-header p {
  font-size: 1.2rem;
  opacity: 0.95;
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 1rem;
  }

  .page-header h1 {
    font-size: 2.2rem;
  }

  .page-header p {
    font-size: 1rem;
  }
}
</style>
